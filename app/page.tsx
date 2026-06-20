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

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-[1600px] mx-auto px-8 py-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold">
              Research Grant Radar
            </h1>

            <p className="text-slate-400 mt-2">
              Real-time funding opportunities
            </p>
          </div>

          
        </div>

        {/* Welcome Banner */}

        <div className="mb-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back 👋
          </h2>

          <p className="text-slate-400">
            Track funding opportunities from Indian
            government agencies, research councils,
            universities and innovation programs.
          </p>
        </div>

        {/* Stats */}

        <DashboardStats
          totalGrants={totalGrants}
          openGrants={openGrants}
          closingSoon={closingSoon}
          agencies={agencies}
        />

        {/* Table */}

        <div className="mt-8">
          <GrantTable grants={grants || []} />
        </div>

      </div>
    </main>
  );
}