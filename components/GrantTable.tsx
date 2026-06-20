"use client";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";

type Grant = {
  id: string;
  agency: string;
  scheme: string;
  focusArea: string;
  fundingAmount: string;
  closingDate: string;
  status: string;
  website: string;
};

export default function GrantTable({
  grants,
}: {
  grants: Grant[];
}) {
  const [search, setSearch] = useState("");

  const filtered = grants.filter((grant) =>
    `${grant.agency} ${grant.scheme} ${grant.focusArea}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">

      {/* Search Bar */}

      <div className="p-6 border-b border-slate-800">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search grants by agency, scheme or focus area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto max-h-[700px]">

        <table className="w-full">

          <thead className="sticky top-0 bg-slate-950 z-10">

            <tr className="border-b border-slate-800">

              <th className="text-left p-4 font-semibold">
                Agency
              </th>

              <th className="text-left p-4 font-semibold">
                Scheme
              </th>

              <th className="text-left p-4 font-semibold">
                Focus Area
              </th>

              <th className="text-left p-4 font-semibold">
                Amount
              </th>

              <th className="text-left p-4 font-semibold">
                Closing Date
              </th>

              <th className="text-left p-4 font-semibold">
                Status
              </th>

              <th className="text-left p-4 font-semibold">
                Website
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((grant, index) => (

              <tr
                key={grant.id}
                className={`
                  transition-all duration-200
                  hover:bg-slate-800
                  ${index % 2 === 0
                    ? "bg-slate-900"
                    : "bg-slate-950"}
                `}
              >

                <td className="p-4 font-medium">
                  {grant.agency}
                </td>

                <td className="p-4">
                  {grant.scheme}
                </td>

                <td className="p-4">

                  <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">

                    {grant.focusArea || "General"}

                  </span>

                </td>

                <td className="p-4">
                  {grant.fundingAmount}
                </td>

                <td className="p-4">
                  {grant.closingDate}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      grant.status?.toLowerCase() === "open"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {grant.status}
                  </span>

                </td>

                <td className="p-4">

                  <a
                    href={grant.website?.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                  >
                    Visit
                    <ExternalLink size={14} />
                  </a>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 px-6 py-4 text-sm text-slate-400">
        Showing {filtered.length} grants
      </div>

    </div>
  );
}