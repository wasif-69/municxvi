"use client";

import { useEffect, useState } from "react";

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
}

export default function PdfViewer({ pdfUrl, title }: PdfViewerProps) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ios =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1);

    setIsIOS(ios);
  }, []);

  useEffect(() => {
    if (isIOS) {
      window.location.href = pdfUrl;
      // or:
      // window.open(pdfUrl, "_blank");
    }
  }, [isIOS, pdfUrl]);

  if (isIOS) {
    return (
      <div className="flex h-[85vh] items-center justify-center text-white">
        Opening PDF...
      </div>
    );
  }

  return (
    <iframe
      src={pdfUrl}
      className="h-[85vh] w-full"
      title={title}
    />
  );
}