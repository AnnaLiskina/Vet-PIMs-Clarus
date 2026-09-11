import { useEffect, useRef, useState } from "react";
import svgPathsSmall from "./imports/Vector/svg-5zm4tbzhmb";
import svgPathsLarge from "./imports/Vector-1/svg-n7gbk97bcx";

// Small paw (18.37 × 19.02) — used for even steps
const PawSmall = ({ color }: { color: string }) => (
  <svg fill="none" height="19.016" viewBox="0 0 18.3695 19.016" width="18.3695" xmlns="http://www.w3.org/2000/svg">
    <path d={svgPathsSmall.p6fe9080} fill={color} />
  </svg>
);

// Large paw (22.80 × 23.61) — used for odd steps
const PawLarge = ({ color }: { color: string }) => (
  <svg fill="none" height="23.6056" viewBox="0 0 22.803 23.6056" width="22.803" xmlns="http://www.w3.org/2000/svg">
    <path d={svgPathsLarge.p1395ad00} fill={color} />
  </svg>
);

const TRAIL_COUNT = 7;
const STEP_MS = 620;
const MAX_VISIBLE = 5;

// Diagonal trail bottom-left → top-right, alternating gait offset
const POSITIONS = Array.from({ length: TRAIL_COUNT }, (_, i) => {
  const t = i / (TRAIL_COUNT - 1);
  const baseX = 55 + t * 285;
  const baseY = 255 - t * 195;
  const sideOffset = i % 2 === 0 ? -17 : 17;
  const rotation = i % 2 === 0 ? -12 : 12;
  return { x: baseX + sideOffset, y: baseY, rotation };
});

type Print = { id: number; posIdx: number; appeared: boolean };

export default function App() {
  const [prints, setPrints] = useState<Print[]>([]);
  const uidRef = useRef(0);
  const stepRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      const posIdx = stepRef.current % POSITIONS.length;
      const id = uidRef.current++;
      stepRef.current++;

      setPrints((prev) => {
        const trimmed = prev.slice(-(MAX_VISIBLE - 1));
        return [...trimmed, { id, posIdx, appeared: false }];
      });

      // Trigger the appear transition on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPrints((prev) =>
            prev.map((p) => (p.id === id ? { ...p, appeared: true } : p))
          );
        });
      });
    };

    tick();
    const iv = setInterval(tick, STEP_MS);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="size-full flex items-center justify-center" style={{ background: "#fdf5f0" }}>
      <div style={{ position: "relative", width: 400, height: 320 }}>
        {prints.map((print, idx) => {
          const pos = POSITIONS[print.posIdx];
          const age = prints.length - 1 - idx; // 0 = newest
          // Color fades: newest = vivid, older = lighter pink
          const color = age === 0 ? "#e05c3a" : age === 1 ? "#e8836a" : age === 2 ? "#eda899" : "#f0c4b8";
          // Final opacity: newest = bold, older = dimmer
          const finalOpacity = age === 0 ? 1 : age === 1 ? 0.75 : age === 2 ? 0.5 : 0.3;

          return (
            <div
              key={print.id}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
              }}
            >
              {/* Inner wrapper handles scale + opacity transition */}
              <div
                style={{
                  opacity: print.appeared ? finalOpacity : 0,
                  transform: `scale(${print.appeared ? 1 : 0.35})`,
                  transition: `opacity ${STEP_MS * 0.85}ms cubic-bezier(.22,.68,0,1.2), transform ${STEP_MS * 0.85}ms cubic-bezier(.22,.68,0,1.2)`,
                  transformOrigin: "center",
                }}
              >
                {print.posIdx % 2 === 0
                  ? <PawSmall color={color} />
                  : <PawLarge color={color} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
