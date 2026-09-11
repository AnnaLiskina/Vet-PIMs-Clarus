import { useEffect } from "react";
import PawTrail, { TRAIL_COUNT, STEP_MS } from "./PawTrail";

const TOTAL_DURATION_MS = TRAIL_COUNT * STEP_MS + 800;

type Props = { onDone: () => void };

export default function PolicySearchLoading({ onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, TOTAL_DURATION_MS);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="size-full flex items-center justify-center" style={{ background: "#fdf5f0" }}>
      <PawTrail />
    </div>
  );
}
