import Link from "next/link";

const AGENCIES: { name: string; url: string; note?: string }[] = [
  { name: "DBT", url: "https://dbtindia.gov.in" },
  { name: "BIRAC", url: "https://birac.nic.in" },
  { name: "DST", url: "https://dst.gov.in" },
  { name: "CSIR", url: "https://www.csir.res.in" },
  { name: "ICMR", url: "https://www.icmr.gov.in" },
  {
    name: "ANRF",
    url: "https://anrf.gov.in",
    note: "portal: anrfonline.in",
  },
  { name: "MNRE", url: "https://mnre.gov.in" },
  { name: "MeitY", url: "https://www.meity.gov.in" },
  { name: "ICAR", url: "https://icar.gov.in" },
  { name: "DSIR", url: "https://www.dsir.gov.in" },
  {
    name: "Azim Premji Foundation",
    url: "https://azimpremjifoundation.org",
  },
  { name: "Tata Trusts", url: "https://www.tatatrusts.org" },
  { name: "Nudge Institute", url: "https://www.thenudge.org" },
  {
    name: "United Way India",
    url: "https://www.unitedwaymumbai.org",
  },
  { name: "Wipro Foundation", url: "https://www.wiprofoundation.org" },
];

type FooterProps = {
  totalGrants?: number;
  agencyCount?: number;
};

export default function Footer({ totalGrants, agencyCount }: FooterProps) {
  return (
    <footer className="bg-black mt-12">
      <div className="max-w-[1600px] mx-auto px-8">

        {/* Live status strip */}
        <div className="flex items-center gap-2 py-4 border-b border-neutral-800">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono tracking-wide text-slate-400">
            {agencyCount ?? 15} agencies tracked · {totalGrants ?? 34} grants indexed · synced daily
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1px_2fr_1px_0.9fr] gap-x-10 py-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-slate-900 text-xs font-bold tracking-tight">
                RGR
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Research Grant Radar
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Live view of open, upcoming and recently closed research
              funding schemes across Indian government agencies, PSUs
              and philanthropic trusts.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-neutral-800" />

          {/* Agencies panel */}
          <div className="mt-10 lg:mt-0">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-[11px] font-semibold tracking-[0.15em] text-slate-500 uppercase">
                Agencies Covered
              </h3>
              <span className="text-[11px] font-mono text-slate-600">
                {AGENCIES.length} sources
              </span>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm">
              {AGENCIES.map((agency) => (
                <li key={agency.name}>
                  <a
                    href={agency.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {agency.name}
                  </a>
                  {agency.note && (
                    <span className="block text-[11px] text-slate-600 mt-0.5">
                      {agency.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-neutral-800" />

          {/* Company panel */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-[11px] font-semibold tracking-[0.15em] text-slate-500 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/thekavyaasharma/Research-Grant-Radar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  GitHub
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-60"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs font-mono text-slate-500 tracking-tight">
            © 2026 Research Grant Radar
          </p>
          <p className="text-xs text-slate-500">
            Built by{" "}
            <span className="text-slate-300">Kavya Sharma</span> During
            Internship, under the guidance of Chief Scientist at
            CSIR-CSIO: <span className="text-slate-300">DR. VD Shivling</span>
          </p>
        </div>
      </div>
    </footer>
  );
}