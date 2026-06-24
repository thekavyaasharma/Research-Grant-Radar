import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About · Research Grant Radar",
  description:
    "The objective behind Research Grant Radar, the problem it solves, and who built it.",
};

export default function AboutPage() {
  return (
    <main
      className="min-h-screen text-slate-900"
      style={{
        backgroundColor: "#f8fafc",
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="max-w-3xl mx-auto px-8 py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Back to dashboard
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center text-white text-xs">
            RGR
          </div>
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            About
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-10">
          About Research Grant Radar
        </h1>

        {/* Objective */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
            Objective
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Research Grant Radar exists to give researchers, institutions
            and NGOs a single, reliable place to track research funding
            opportunities across India. Instead of treating grant data as
            something to check on once, the project is built around
            keeping it current: regularly verifying every entry against
            its original source so that what you see reflects what
            agencies are actually offering right now, not what they
            offered last quarter.
          </p>
        </section>

        {/* The problem */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
            The problem it solves
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Research funding calls in India are scattered across dozens of
            agency websites, each with its own format, update cadence, and
            notice style. A government grant might be buried in a PDF on a
            ministry site, a philanthropic one might only be a single line
            on a foundation&apos;s &quot;get involved&quot; page. Deadlines
            get extended without notice. Calls open and close quietly.
            There&apos;s no single index that stays current.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For a researcher or institution, this means manually checking
            fifteen or more separate sites just to find out what&apos;s
            currently open — and easily missing a deadline that passed
            unannounced, or an extension that wasn&apos;t. Research Grant
            Radar consolidates these into one searchable, filterable view,
            with every entry linking back to its original source.
          </p>
        </section>

        <div className="h-px bg-slate-200 mb-10" />

        {/* Developer */}
        <section>
          <h2 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
            Developer
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Built by{" "}
            <span className="font-semibold text-slate-900">
              Kavya Sharma
            </span>
            , a final-year B.Tech Computer Science Engineering student at
            Rayat Bahra University, Mohali. This project was developed
            during an internship at{" "}
            <span className="font-semibold text-slate-900">
              CSIR-CSIO
            </span>
            , under the guidance of{" "}
            <span className="font-semibold text-slate-900">
              V D Shivling
            </span>
            , Chief Scientist.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Have feedback, spotted an outdated entry, or want to suggest an
            agency to add?{" "}
            <Link
              href="/contact"
              className="text-slate-900 font-medium underline underline-offset-2 hover:text-slate-600"
            >
              Get in touch
            </Link>
            .
          </p>
        </section>

      </div>
    </main>
  );
}