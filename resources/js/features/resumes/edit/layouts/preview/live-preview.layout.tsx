import type { ReactNode } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { PdfDownloadButton } from "../../components/buttons/pdf-download.button.component";
import { ResumeEditorLivePreviewZoomControl } from "../../components/preview/zoom-control.preview.component";

export function ResumeEditorLivePreviewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <TransformWrapper
      minScale={0.3}
      maxScale={3}
      initialPositionX={0}
      initialPositionY={0}
    >
      <section className="hidden h-dvh overflow-hidden border bg-card/40 md:block">
        <div className="items-center-safe justify-center-safe flex gap-x-4 border-b bg-card py-2">
          <ResumeEditorLivePreviewZoomControl />
          <PdfDownloadButton />
        </div>
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
          }}
          contentStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="min-h-210.5 w-148.75 bg-white text-black shadow-lg">
            {children}
          </div>
        </TransformComponent>
      </section>
    </TransformWrapper>
  );
}
