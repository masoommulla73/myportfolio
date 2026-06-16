"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const START_FRAME = 6;
const END_FRAME = 200;
const FRAME_COUNT = END_FRAME - START_FRAME + 1; // 195 frames

export default function CanvasHero({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track scroll progress purely over this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Progressive preloading of frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const preloadNext = (frameNumber: number) => {
      if (frameNumber > END_FRAME) return;
      const img = new Image();
      const frameStr = frameNumber.toString().padStart(3, "0");
      img.src = `/ezgif/ezgif-frame-${frameStr}.png`;
      
      img.onload = () => {
        loadedCount++;
        // Start rendering as soon as the first frame loads to avoid blank screen
        if (loadedCount === 1) setLoaded(true);
        // Load the next one progressively
        preloadNext(frameNumber + 1);
      };
      
      img.onerror = () => {
        console.error(`Failed to load frame ${frameStr}`);
        preloadNext(frameNumber + 1); // Skip and continue
      };

      const arrayIndex = frameNumber - START_FRAME;
      images[arrayIndex] = img;
    };

    preloadNext(START_FRAME);
    imagesRef.current = images;
  }, []);

  // Animation Loop State
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);

  // Map scroll progress to target frame index
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Range: 0 to FRAME_COUNT - 1
      targetFrameRef.current = latest * (FRAME_COUNT - 1);
    });
  }, [scrollYProgress]);

  // Persistent Rendering Loop
  useEffect(() => {
    if (!loaded) return;
    
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d", { alpha: true }); // Enable transparency
      
      if (canvas && ctx && imagesRef.current.length > 0) {
        // Smooth Lerp Function
        const target = targetFrameRef.current;
        const current = currentFrameRef.current;
        
        // Easing factor (0.08 is silky smooth)
        currentFrameRef.current = current + (target - current) * 0.08;

        const frameIndex = Math.min(
          FRAME_COUNT - 1, 
          Math.max(0, Math.floor(currentFrameRef.current))
        );
        
        const img = imagesRef.current[frameIndex];
        
        if (img && img.complete) {
          const dpr = window.devicePixelRatio || 1;
          const rect = canvas.getBoundingClientRect();
          
          // High-DPR Support & Responsive Sizing
          if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
          }

          // Clear previous transparent frame
          ctx.clearRect(0, 0, rect.width, rect.height);

          // Object-cover logic equivalent
          const imgRatio = img.width / img.height;
          const canvasRatio = rect.width / rect.height;
          
          let drawWidth = rect.width;
          let drawHeight = rect.height;
          let offsetX = 0;
          let offsetY = 0;

          if (canvasRatio > imgRatio) {
            drawHeight = rect.width / imgRatio;
            offsetY = (rect.height - drawHeight) / 2;
          } else {
            drawWidth = rect.height * imgRatio;
            offsetX = (rect.width - drawWidth) / 2;
          }

          // Draw the calculated interpolated frame
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* HTML5 Canvas Background (Now transparent) */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
        
        {/* Children define their own z-index to sit behind or in front of the z-10 canvas */}
        {children}
      </div>
    </div>
  );
}
