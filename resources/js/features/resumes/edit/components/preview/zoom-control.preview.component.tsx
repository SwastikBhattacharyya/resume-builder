import { LucideMinus, LucidePlus } from "lucide-react";
import { useState } from "react";
import { useControls, useTransformEffect } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";

export function ResumeEditorLivePreviewZoomControl() {
  const { zoomIn, zoomOut } = useControls();
  const [scale, setScale] = useState(1);

  useTransformEffect(({ state }) => {
    setScale(Math.round(state.scale * 100));
  });

  return (
    <div className="inline-flex h-8 items-center gap-1 rounded-md bg-muted shadow-sm lg:w-32">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 cursor-pointer focus-visible:ring-0"
        onClick={() => zoomOut(0.1)}
      >
        <LucideMinus />
      </Button>

      <span className="min-w-13 text-center font-medium text-sm">{scale}%</span>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 cursor-pointer focus-visible:ring-0"
        onClick={() => zoomIn(0.1)}
      >
        <LucidePlus />
      </Button>
    </div>
  );
}
