"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number>();

  return (
    <div className="flex justify-center overflow-auto p-4">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="text-white">Loading PDF...</p>}
        error={<p className="text-red-500">Failed to load PDF.</p>}
      >
        {Array.from({ length: numPages ?? 0 }, (_, index) => (
          <Page
            key={index}
            pageNumber={index + 1}
            width={900}
            renderTextLayer
            renderAnnotationLayer
            className="mb-6"
          />
        ))}
      </Document>
    </div>
  );
}