import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Contact · Research Grant Radar",
  description: "Get in touch about Research Grant Radar.",
};

// Brand icons (GitHub, LinkedIn, Medium) are intentionally inline SVGs.
// lucide-react removed brand/logo icons in v1+, so these can't be imported
// from the package anymore — see https://lucide.dev/guide/react/migration
function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.13-.02-2.04-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MediumIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2.5 6.5c0-.6-.46-1.1-1.04-1.18l-.96-.11v-.41h7.07l5.46 11.97 4.8-11.97h6.73v.41l-.83.08c-.5.06-.86.5-.83 1V17.5c-.03.5.33.94.83 1l.81.08v.42H17.5v-.41l.84-.08c.5-.07.86-.51.83-1.01V7.78l-5.62 14.22h-.66L6.5 7.78v9.5c-.07.66.42 1.27 1.08 1.34l.96.1v.42H2.5v-.42l.96-.1A1.18 1.18 0 0 0 4.5 17.28V6.5Z" />
    </svg>
  );
}

const CONTACTS = [
  {
    label: "Email",
    value: "kavyash1804@gmail.com",
    href: "mailto:kavyash1804@gmail.com",
    icon: <Mail size={17} />,
  },
  {
    label: "LinkedIn",
    value: "thekavyaasharma",
    href: "https://www.linkedin.com/in/thekavyaasharma",
    icon: <LinkedinIcon />,
  },
  {
    label: "GitHub",
    value: "thekavyaasharma",
    href: "https://github.com/thekavyaasharma",
    icon: <GithubIcon />,
  },
  {
    label: "Medium",
    value: "@kavyash1804",
    href: "https://medium.com/@kavyash1804",
    icon: <MediumIcon />,
  },
];

export default function ContactPage() {
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
            Contact
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Get in touch
        </h1>
        <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
          Spotted an outdated grant, have a correction, or want to suggest
          an agency to add to the radar? Reach out through any of these.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                contact.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                {contact.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  {contact.label}
                </div>
                <div className="text-sm font-medium text-slate-900 truncate">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}