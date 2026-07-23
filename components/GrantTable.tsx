"use client";

import { useMemo, useState } from "react";
import { Search, ExternalLink, X } from "lucide-react";


type Grant = {
  id: string;
  agency: string;
  agencyType: string;
  scheme: string;
  focusArea: string;
  openingDate: string;
  closingDate: string;
  status: string;
  website: string;
  applicationLink: string;
};

type Props = {
  grants: Grant[];
  // Optional controlled filter — pass these from a parent (e.g. page.tsx)
  // if you want DashboardStats cards to drive this table's status filter.
  // If omitted, GrantTable manages its own internal filter state as before.
  statusFilter?: string;
  onStatusFilterChange?: (status: string) => void;
};

export default function GrantTable({
  grants,
  statusFilter: controlledStatusFilter,
  onStatusFilterChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [agencyFilter, setAgencyFilter] = useState("All");
  const [internalStatusFilter, setInternalStatusFilter] = useState("All");

  // Use the controlled value if the parent provided one, otherwise fall back
  // to internal state so this component still works standalone.
  const isControlled = controlledStatusFilter !== undefined && !!onStatusFilterChange;
  const statusFilter = isControlled ? controlledStatusFilter! : internalStatusFilter;
  const setStatusFilter = isControlled ? onStatusFilterChange! : setInternalStatusFilter;

  const agencies = useMemo(
    () => Array.from(new Set(grants.map((g) => g.agency))).filter(Boolean),
    [grants]
  );

  const statuses = ["Open", "Closed", "Open - Rolling"];

  const filtered = grants.filter((grant) => {
    const matchesSearch = `${grant.agency} ${grant.scheme} ${grant.focusArea}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesAgency = agencyFilter === "All" || grant.agency === agencyFilter;

    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Open" && grant.status?.toLowerCase() === "open") ||
      (statusFilter === "Open - Rolling" && grant.status?.toLowerCase() === "open - rolling") ||
      (statusFilter === "Closed" && grant.status?.toLowerCase() === "closed");
    return matchesSearch && matchesAgency && matchesStatus;
  });

  const resetFilters = () => {
    setSearch("");
    setAgencyFilter("All");
    setStatusFilter("All");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">

      {/* Search + Filter Bar */}
      <div className="p-5 border-b border-slate-200 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[240px]">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"/>

          <input
            type="text"
            placeholder="Search scheme, agency, focus area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"/>
        </div>

        <select
          value={agencyFilter}
          onChange={(e) => setAgencyFilter(e.target.value)}
          className="bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300">
          <option value="All">All agencies</option>
          {agencies.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300">
          <option value="All">All statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-600 hover:bg-slate-50">
          <X size={14} />
          Reset
        </button>
      </div>

      {/* Status Legend */}
      <div className="px-5 py-2.5 border-b border-slate-200 flex flex-wrap gap-4 text-xs text-slate-500 bg-slate-50/50">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-blink" />
          Open — accepting applications
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-blink" />
          Open - Rolling — accepts applications continuously
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          Closed — not currently accepting applications
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[700px]">

        <table className="w-full text-sm">

          <thead className="sticky top-0 bg-slate-50 z-10">

            <tr className="border-b border-slate-200">
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Agency
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Agency Type
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Scheme / Grant Name
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Focus Area
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Opening Date
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Closing Date
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Status
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Website
              </th>
              <th className="text-left p-4 font-semibold text-slate-500 text-xs uppercase tracking-wide">
                Application Link
              </th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((grant) => (

              <tr
                key={grant.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-slate-900">
                  {grant.agency}
                </td>

                <td className="p-4 text-slate-500">
                  {grant.agencyType}
                </td>

                <td className="p-4 font-medium text-slate-800">
                  {grant.scheme}
                </td>

                <td className="p-4 text-slate-600">
                  {grant.focusArea || "General"}
                </td>

                <td className="p-4 text-slate-500">
                  {grant.openingDate}
                </td>

                <td className="p-4 text-slate-500">
                  {grant.closingDate}
                </td>

                <td className="p-4">
                  {(() => {
                    const s = grant.status?.toLowerCase();
                    const isOpen = s === "open";
                    const isRolling = s === "open - rolling";

                    const badgeClass = isOpen
                      ? "bg-emerald-50 text-emerald-600"
                      : isRolling
                      ? "bg-amber-50 text-amber-600"
                      : "bg-red-50 text-red-600";

                    const dotClass = isOpen
                      ? "bg-emerald-500 animate-blink"
                      : isRolling
                      ? "bg-amber-500 animate-blink"
                      : "bg-red-500";

                    const statusLabel = isOpen
                      ? "Accepting applications"
                      : isRolling
                      ? "Accepts applications continuously"
                      : "Not currently accepting applications";

                    return (
                      <span
                        title={statusLabel}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
                        {grant.status}
                      </span>
                    );
                  })()}
                </td>

                <td className="p-4">
                  {grant.website ? (
                    <a
                      href={grant.website.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Visit
                      <ExternalLink size={13} />
                    </a>
                  ) : (

                    <span className="text-slate-400">N/A</span>
                    
                  )}
                </td>

                <td className="p-4">
                  {grant.applicationLink ? (
                    <a
                      href={grant.applicationLink.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Apply
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-slate-400">N/A</span>
                  )}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 px-6 py-3.5 text-sm text-slate-500">
        Showing {filtered.length} of {grants.length} grants
      </div>

    </div>
  );
}
