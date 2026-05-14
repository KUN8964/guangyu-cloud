"use client";

/* ═══════════════════════════════════════════
   Pixel Art Illustrations for Product Cards
   16×16 logical grid → SVG, pixelated rendering
   Colors from design tokens:
     neon-cyan:   #00F0FF
     neon-magenta:#FF2D95
     neon-purple: #B44CFF
     neon-gold:   #FFD700
     abyss:       #06060E
     card:        #18183A
   ═══════════════════════════════════════════ */

type PixelArtProps = {
  className?: string;
  size?: number;
};

/* ── Shared background grid ── */
function GridBg() {
  return (
    <>
      {/* subtle 4x4 grid lines */}
      {[4, 8, 12].map((y) => (
        <line key={`h${y}`} x1={0} y1={y} x2={16} y2={y}
          stroke="#252550" strokeWidth={0.5} opacity={0.5} />
      ))}
      {[4, 8, 12].map((x) => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={16}
          stroke="#252550" strokeWidth={0.5} opacity={0.5} />
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════
   1. Edge Server — compact tower, RK3588 chip
   ═══════════════════════════════════════════ */
export function EdgeServerPixel({ className = "", size = 128 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={16} height={16} fill="#06060E" />
      <GridBg />
      {/* Server tower body */}
      <rect x={4} y={2} width={8} height={12} rx={0} fill="#18183A" stroke="#00F0FF" strokeWidth={0.5} />
      {/* Ventilation slots */}
      <rect x={5.5} y={3.5} width={5} height={1} fill="#0A0A16" />
      <rect x={5.5} y={5.5} width={5} height={0.5} fill="#0A0A16" />
      <rect x={5.5} y={7} width={5} height={0.5} fill="#0A0A16" />
      <rect x={5.5} y={8.5} width={5} height={0.5} fill="#0A0A16" />
      <rect x={5.5} y={10} width={5} height={0.5} fill="#0A0A16" />
      {/* Chip icon glowing */}
      <rect x={5.5} y={11.5} width={5} height={2} fill="#003344" />
      <rect x={6.5} y={12} width={3} height={1} fill="#00F0FF" />
      {/* Blinking LEDs */}
      <rect x={5.5} y={3.5} width={1} height={0.5} fill="#00F0FF" opacity={0.9} />
      <rect x={7} y={3.5} width={1} height={0.5} fill="#FF2D95" opacity={0.7} />
      <rect x={8.5} y={3.5} width={1} height={0.5} fill="#39FF14" opacity={0.6} />
      {/* Data streams */}
      <rect x={0} y={7} width={4} height={0.5} fill="#00F0FF" opacity={0.4} />
      <rect x={0} y={8.5} width={2} height={0.5} fill="#00F0FF" opacity={0.3} />
      <rect x={12} y={7} width={4} height={0.5} fill="#00F0FF" opacity={0.4} />
      <rect x={14} y={8.5} width={2} height={0.5} fill="#00F0FF" opacity={0.3} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   2. Cloud Storage — 4 drives + padlock
   ═══════════════════════════════════════════ */
export function CloudStoragePixel({ className = "", size = 128 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={16} height={16} fill="#06060E" />
      <GridBg />
      {/* 4 drive blocks in 2x2 */}
      {[[2, 3], [9, 3], [2, 9], [9, 9]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={5} height={4} fill="#18183A" stroke="#FF2D95" strokeWidth={0.5} />
          <rect x={x + 1} y={y + 0.8} width={3} height={1} fill="#0A0A16" />
          <rect x={x + 1} y={y + 2.2} width={3} height={0.5} fill="#0A0A16" />
        </g>
      ))}
      {/* Padlock floating above center */}
      <rect x={6} y={0} width={4} height={3} rx={0} fill="#FF2D95" />
      <rect x={5.5} y={1.5} width={5} height={1.5} fill="#18183A" />
      {/* Lock shackle */}
      <rect x={7} y={0} width={2} height={2.5} fill="none" stroke="#FFD700" strokeWidth={1} />
      {/* Data packets between drives */}
      <rect x={7.5} y={5.5} width={1} height={1} fill="#FF2D95" opacity={0.6} />
      <rect x={7.5} y={8} width={1} height={1} fill="#FFD700" opacity={0.6} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   3. GPU Cluster — 3×3 chips + lightning
   ═══════════════════════════════════════════ */
export function GPUClusterPixel({ className = "", size = 128 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={16} height={16} fill="#06060E" />
      <GridBg />
      {/* 3x3 GPU chips */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <g key={`${row}${col}`}>
            <rect x={2 + col * 4.5} y={2 + row * 4.5} width={3.5} height={3.5}
              fill="#18183A" stroke="#B44CFF" strokeWidth={0.5} />
            <rect x={2.5 + col * 4.5} y={2.5 + row * 4.5}
              width={2.5} height={2.5} fill="#B44CFF" opacity={0.3} />
            {/* Inner chip detail */}
            <rect x={3 + col * 4.5} y={3 + row * 4.5}
              width={1.5} height={1.5} fill="#B44CFF" opacity={0.6} />
          </g>
        ))
      )}
      {/* Lightning bolt — computing power */}
      <polygon points="8,0 6,4 7.5,4 5,8 9,3 7.5,3 10,0"
        fill="#FFD700" opacity={0.8} />
      {/* Data convergence lines */}
      <line x1={3} y1={8} x2={8} y2={8} stroke="#B44CFF" strokeWidth={0.3} opacity={0.5} />
      <line x1={4} y1={12} x2={8} y2={8} stroke="#B44CFF" strokeWidth={0.3} opacity={0.4} />
      <line x1={12} y1={12} x2={8} y2={8} stroke="#B44CFF" strokeWidth={0.3} opacity={0.4} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   4. AI Knowledge Base — brain + nodes + books
   ═══════════════════════════════════════════ */
export function AIKnowledgePixel({ className = "", size = 128 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={16} height={16} fill="#06060E" />
      <GridBg />
      {/* Neural brain shape */}
      <rect x={4} y={1} width={8} height={6} rx={0} fill="#18183A" stroke="#00F0FF" strokeWidth={0.5} />
      <rect x={5} y={2} width={2} height={2} fill="#00F0FF" opacity={0.5} />
      <rect x={9} y={2} width={2} height={2} fill="#FFD700" opacity={0.5} />
      <rect x={5} y={4.5} width={6} height={2} fill="#18183A" />
      {/* Neural connections */}
      <line x1={6} y1={3} x2={10} y2={3} stroke="#00F0FF" strokeWidth={0.5} opacity={0.8} />
      <line x1={6} y1={3} x2={3} y2={5} stroke="#FFD700" strokeWidth={0.5} opacity={0.6} />
      <line x1={10} y1={3} x2={13} y2={5} stroke="#FFD700" strokeWidth={0.5} opacity={0.6} />
      <line x1={8} y1={5.5} x2={8} y2={9} stroke="#00F0FF" strokeWidth={0.5} opacity={0.7} />
      {/* Floating book icons */}
      {[[1, 9], [7, 10], [11, 8]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={4} height={2.5}
            fill="#18183A" stroke={i === 0 ? "#00F0FF" : "#FFD700"} strokeWidth={0.5} />
          <rect x={x + 0.5} y={y + 0.8} width={3} height={1}
            fill={i === 0 ? "#00F0FF" : "#FFD700"} opacity={0.4} />
        </g>
      ))}
      {/* Knowledge graph nodes */}
      <rect x={3} y={13} width={1.5} height={1.5} fill="#00F0FF" opacity={0.5} />
      <rect x={7} y={12.5} width={1.5} height={1.5} fill="#FFD700" opacity={0.5} />
      <rect x={11} y={13} width={1.5} height={1.5} fill="#B44CFF" opacity={0.5} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   5. Enterprise Cloud Drive — cloud + shield + folders
   ═══════════════════════════════════════════ */
export function EnterpriseDrivePixel({ className = "", size = 128 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={16} height={16} fill="#06060E" />
      <GridBg />
      {/* Cloud shape */}
      <rect x={3} y={1} width={10} height={3} fill="#18183A" stroke="#00F0FF" strokeWidth={0.5} />
      <rect x={4} y={3} width={8} height={2} fill="#18183A" stroke="#00F0FF" strokeWidth={0.5} />
      <rect x={5} y={1} width={2} height={6} fill="#18183A" stroke="#00F0FF" strokeWidth={0.3} />
      {/* Shield overlay */}
      <polygon points="8,3 5,4.5 5,7 8,8.5 11,7 11,4.5"
        fill="none" stroke="#B44CFF" strokeWidth={0.8} opacity={0.8} />
      <rect x={7} y={5} width={2} height={1.5} fill="#B44CFF" opacity={0.5} />
      {/* Folders inside cloud */}
      {[[6, 9], [9.5, 9.5]].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={3.5} height={2.5}
            fill="#18183A" stroke={i === 0 ? "#00F0FF" : "#B44CFF"} strokeWidth={0.5} />
          <rect x={x + 1} y={y + 1} width={1.5} height={1}
            fill={i === 0 ? "#00F0FF" : "#B44CFF"} opacity={0.3} />
        </g>
      ))}
      {/* Upload/download arrows */}
      <polygon points="3,11 2,13 4,13" fill="#00F0FF" opacity={0.6} />
      <polygon points="14,11 13,13 15,13" fill="#B44CFF" opacity={0.6} />
      {/* Lock icon */}
      <rect x={7} y={11} width={2.5} height={2} fill="#FFD700" opacity={0.6} />
      <rect x={7.5} y={10} width={1.5} height={1.5} fill="none" stroke="#FFD700" strokeWidth={0.8} opacity={0.6} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Lightning bolt logo (32x32 base)
   ═══════════════════════════════════════════ */
export function LightningLogoPixel({ className = "", size = 32 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={32} height={32} fill="#06060E" />
      {/* Lightning bolt in 32x32 grid */}
      <rect x={14} y={2} width={4} height={6} fill="#00F0FF" />
      <rect x={10} y={8} width={4} height={4} fill="#00F0FF" />
      <rect x={12} y={12} width={4} height={4} fill="#00F0FF" />
      <rect x={16} y={16} width={4} height={4} fill="#00F0FF" />
      <rect x={14} y={20} width={4} height={4} fill="#00F0FF" />
      <rect x={12} y={24} width={4} height={6} fill="#00F0FF" />
      {/* Glow pixels */}
      <rect x={13} y={3} width={2} height={2} fill="#00F0FF" opacity={0.3} />
      <rect x={18} y={0} width={2} height={2} fill="#00F0FF" opacity={0.15} />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Terminal cursor (blinking, 16x32)
   ═══════════════════════════════════════════ */
export function TerminalCursorPixel({ className = "", size = 16 }: PixelArtProps) {
  return (
    <svg viewBox="0 0 8 16" width={size} height={size * 2}
      className={className}
      style={{ imageRendering: "pixelated" }}>
      <rect x={0} y={0} width={8} height={16} fill="#06060E" />
      <rect x={2} y={3} width={4} height={10} fill="#FF2D95" opacity={0.9}>
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Product icon mapping
   ═══════════════════════════════════════════ */
export const productPixels: Record<string, React.ComponentType<PixelArtProps>> = {
  "edge-server": EdgeServerPixel,
  "cloud-storage": CloudStoragePixel,
  "distributed-compute": GPUClusterPixel,
  "ai-knowledge": AIKnowledgePixel,
  "enterprise-drive": EnterpriseDrivePixel,
};
