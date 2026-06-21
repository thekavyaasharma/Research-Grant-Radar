import { supabase } from "@/lib/supabase";
import GrantTable from "@/components/GrantTable";
import DashboardStats from "@/components/DashboardStats";

export const revalidate = 86400;

export default async function Home() {
  const { data: grants } = await supabase
    .from("Grants")
    .select("*")
    .order("created_at", { ascending: false });

  const totalGrants = grants?.length || 0;

  const openGrants =
    grants?.filter(
      (g) => g.status?.toLowerCase() === "open"
    ).length || 0;

  const closingSoon =
    grants?.filter((g) => {
      if (!g.closingDate) return false;

      const closing = new Date(g.closingDate);
      const today = new Date();

      const diff =
        (closing.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      return diff <= 30 && diff >= 0;
    }).length || 0;

  const agencies =
    new Set(grants?.map((g) => g.agency)).size || 0;

  const syncedAt = new Date().toLocaleTimeString("en-IN", { hour12: false });

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
      <div className="max-w-[1600px] mx-auto px-8 py-8">

        {/* Top eyebrow badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center text-white text-xs">
            RGR
          </div>
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            India / Research Funding Intelligence
          </span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
              Research Grant Radar
            </h1>

            <p className="text-slate-500 mt-3 max-w-2xl">
              Live view of open, upcoming and recently closed schemes
              across leading Indian government agencies, PSUs and
              philanthropic trusts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                LIVE · AUTO-REFRESH 
              </div>
              <div className="text-slate-400 mt-0.5">
                synced {syncedAt}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <DashboardStats
          totalGrants={totalGrants}
          openGrants={openGrants}
          closingSoon={closingSoon}
          agencies={agencies}
        />

        {/* Table */}
        <div className="mt-6">
          <GrantTable grants={grants || []} />
        </div>

      </div>
    </main>
  );
}