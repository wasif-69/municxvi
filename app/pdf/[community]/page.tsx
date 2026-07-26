import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import PdfViewer from "@/Components/pdf/pdfview";

const pdfs: Record<string, string | null> = {
  unhrc: "UNHRC.pdf",
  disec: "DISEC.pdf",
  ecosoc: "ECOSOC.pdf",
  pna: "PNA.pdf",
  sochum: "SOCHUM.pdf",
  uncsw: "UNCSW.pdf",
  unicef: "UNICEF.pdf",
  unoosa: "UNOOSA.pdf",
  unsc: "UNSC.pdf",

  interpol: null,
  marvel: null,
};

const committeeNames: Record<string, string> = {
  unhrc: "UNHRC",
  disec: "DISEC",
  ecosoc: "ECOSOC",
  pna: "PNA",
  sochum: "SOCHUM",
  uncsw: "UNCSW",
  unicef: "UNICEF",
  unoosa: "UNOOSA",
  unsc: "UNSC",
  interpol: "Interpol (Crisis)",
  marvel: "Marvel (Doom Protocol)",
};

export default async function Page({
  params,
}: {
  params: Promise<{ community: string }>;
}) {
  const { community } = await params;

  const key = community.toLowerCase();

  const pdf = pdfs[key];

  if (pdf === undefined) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#061222] text-white">

      <section className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/guide"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#C9A227]"
        >
          <ArrowLeft size={16} />
          Back to Study Guides
        </Link>

        <div className="mt-8">

          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A227]">
            Study Guide
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {committeeNames[key]}
          </h1>

          <div className="mt-5 h-px w-24 bg-[#C9A227]" />

        </div>

        {pdf ? (
          <div
          className="
            mt-12
            overflow-hidden
            rounded-3xl
            border
            border-[#C9A227]/20
            bg-white/[0.03]
          "
        >
          <div className="flex flex-col items-center justify-center py-20 px-6">
      
            {/* PDF Icon */}
            <div
              className="
                flex
                h-28
                w-24
                items-center
                justify-center
                rounded-xl
                border
                border-[#C9A227]/20
                bg-[#0B172A]
              "
            >
              <FileText
                size={46}
                className="text-[#C9A227]"
              />
            </div>
      
            {/* Committee Name */}
            <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-white text-center">
              {committeeNames[key]}
            </h2>
      
            <div className="mt-5 h-px w-16 bg-[#C9A227]" />
      
            {/* Button */}
            <a
              href={`/guideline/${pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                rounded-full
                bg-[#C9A227]
                px-8
                py-3
                font-medium
                text-[#061222]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(201,162,39,0.3)]
              "
            >
              Open Study Guide
            </a>
      
          </div>
        </div>
        ) : (
          <div className="mt-16 flex min-h-[50vh] items-center justify-center">

            <div className="max-w-xl text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/10">
                <FileText
                  size={34}
                  className="text-[#C9A227]"
                />
              </div>

              <h2 className="mt-8 text-3xl font-semibold text-white">
                No Study Guide
              </h2>

              <div className="mx-auto mt-5 h-px w-20 bg-[#C9A227]" />

              <p className="mt-8 text-lg leading-8 text-slate-400">
                <span className="font-medium text-white">
                  {committeeNames[key]}
                </span>{" "}
                is a dynamic crisis committee and therefore does not have an official
                study guide.
              </p>

              <p className="mt-5 leading-8 text-slate-500">
                Delegates are encouraged to research the committee&apos;s topic, background,
                and relevant procedures independently before the conference.
              </p>

              <Link
                href="/guide"
                className="
        mt-10
        inline-flex
        items-center
        rounded-full
        bg-[#C9A227]
        px-7
        py-3
        font-medium
        text-[#061222]
        transition
        hover:opacity-90
      "
              >
                Back to Study Guides
              </Link>

            </div>

          </div>
        )}

      </section>

    </main>
  );
}