"use client";

import { useEffect, useRef, useCallback } from "react";

type Animation = "idle" | "blink" | "earTwitch" | "tailWag" | "tongue" | "happy";

const S = 4; // scale (64/16)

export default function PixelPet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    animation: "idle" as Animation,
    animFrame: 0,
    animTimer: 0,
    closed: false,
  });

  const drawCat = useCallback((anim: Animation, frame: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, 64, 64);

    const earL = anim === "earTwitch" ? Math.sin(frame * 0.5) * 2 : 0;
    const tailW = anim === "tailWag" ? Math.sin(frame * 0.3) * 3 : Math.sin(frame * 0.1) * 1.5;

    // Tail
    ctx.fillStyle = "#888";
    ctx.fillRect(13 * S, (7 + tailW) * S, 2 * S, S);
    ctx.fillRect(14 * S, (6 + tailW) * S, S, S);
    ctx.fillRect(14 * S, (8 + tailW) * S, S, S);
    ctx.fillStyle = "#666";
    ctx.fillRect(14 * S, (7 + tailW) * S, S, S);

    // Body
    ctx.fillStyle = "#888";
    for (let x = 3; x <= 12; x++) for (let y = 6; y <= 13; y++) ctx.fillRect(x * S, y * S, S, S);
    for (let x = 4; x <= 11; x++) for (let y = 4; y <= 5; y++) ctx.fillRect(x * S, y * S, S, S);

    // Ears (with twitch offset)
    ctx.fillRect(4 * S, (3 + earL) * S, S, S);
    ctx.fillRect(11 * S, (3 + earL) * S, S, S);
    ctx.fillRect(5 * S, 2 * S, S, S);
    ctx.fillRect(10 * S, 2 * S, S, S);

    // Stripes
    ctx.fillStyle = "#666";
    ctx.fillRect(6 * S, 4 * S, S, S); ctx.fillRect(9 * S, 4 * S, S, S);
    ctx.fillRect(7 * S, 5 * S, S, S); ctx.fillRect(8 * S, 5 * S, S, S);
    ctx.fillRect(9 * S, 9 * S, S, S); ctx.fillRect(11 * S, 9 * S, S, S);
    ctx.fillRect(10 * S, 10 * S, S, S);

    // Cheeks
    ctx.fillStyle = "#FFB6C1";
    ctx.fillRect(4 * S, 7 * S, S, S); ctx.fillRect(11 * S, 7 * S, S, S);

    // Eyes
    ctx.fillStyle = "#000";
    const blink = anim === "blink" || (anim === "idle" && frame % 80 < 3);
    if (blink) {
      ctx.fillRect(5 * S, 6 * S, 2 * S, S / 2);
      ctx.fillRect(9 * S, 6 * S, 2 * S, S / 2);
    } else {
      ctx.fillRect(5 * S, 6 * S, S, S);
      ctx.fillRect(10 * S, 6 * S, S, S);
    }

    // Nose
    ctx.fillRect(7 * S, 7 * S, 2 * S, S);

    // Mouth / Tongue
    if (anim === "tongue") {
      ctx.fillStyle = "#FF6B8A";
      ctx.fillRect(7 * S, 9 * S, 2 * S, S);
      ctx.fillRect(7 * S, 10 * S, 1.5 * S, S);
    } else if (anim === "happy") {
      ctx.fillRect(6 * S, 8 * S, S, S);
      ctx.fillRect(9 * S, 8 * S, S, S);
    } else {
      ctx.fillRect(7 * S, 8 * S, S, S);
      ctx.fillRect(8 * S, 8 * S, S, S);
    }

    // Legs
    ctx.fillStyle = "#888";
    ctx.fillRect(4 * S, 14 * S, S, 2 * S);
    ctx.fillRect(7 * S, 14 * S, S, 2 * S);
    ctx.fillRect(8 * S, 14 * S, S, 2 * S);
    ctx.fillRect(11 * S, 14 * S, S, 2 * S);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const state = stateRef.current;

    let clickCount = 0;

    const onClick = () => {
      clickCount = (clickCount + 1) % 4;
      const anims: Animation[] = ["happy", "earTwitch", "tongue", "tailWag"];
      state.animation = anims[clickCount];
      state.animTimer = 0;

      container.style.transition = "transform 0.2s ease";
      container.style.transform = "translateY(-12px)";
      setTimeout(() => (container.style.transform = ""), 200);
    };

    const onClose = (e: MouseEvent) => {
      e.stopPropagation();
      state.closed = true;
      container.style.display = "none";
    };

    container.addEventListener("click", onClick);

    // Close button
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = "×";
    closeBtn.style.cssText = `
      position: absolute; top: -4px; right: -4px; width: 14px; height: 14px;
      background: #f85149; color: white; border-radius: 50%; text-align: center;
      line-height: 14px; font-size: 10px; cursor: pointer; display: none; z-index: 2;
    `;
    container.appendChild(closeBtn);
    closeBtn.addEventListener("click", onClose);
    container.addEventListener("mouseenter", () => { closeBtn.style.display = "block"; });
    container.addEventListener("mouseleave", () => { closeBtn.style.display = "none"; });

    const idleAnims: Animation[] = ["idle", "idle", "idle", "blink", "earTwitch", "tailWag", "tongue"];

    const loop = () => {
      if (state.closed) return;
      state.animFrame++;

      // Change idle animation randomly
      if (state.animation === "idle" && state.animFrame % 120 === 0 && Math.random() > 0.7) {
        state.animation = idleAnims[Math.floor(Math.random() * idleAnims.length)];
        state.animTimer = 0;
      }

      state.animTimer++;
      // Reset to idle after short animation
      if (state.animation !== "idle" && state.animTimer > 25) {
        state.animation = "idle";
        state.animTimer = 0;
      }

      drawCat(state.animation, state.animFrame);
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      container.removeEventListener("click", onClick);
    };
  }, [drawCat]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <canvas ref={canvasRef} width={64} height={64} />
    </div>
  );
}
