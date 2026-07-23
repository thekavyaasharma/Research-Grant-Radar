"use client";

import { useState } from "react";
import DashboardStats from "@/components/DashboardStats";
import GrantTable from "@/components/GrantTable";

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
  totalGrants: number;
  openGrants: number;
  closedGrants: number;
  agencies: number;
};

export default function DashboardClient({
  grants,
  totalGrants,
  openGrants,
  
  closedGrants,
  agencies,
}: Props) {
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <>
      {/* Stats */}
      <DashboardStats
        totalGrants={totalGrants}
        openGrants={openGrants}
        closedGrants={closedGrants}
        agencies={agencies}
        activeFilter={statusFilter}
        onFilterChange={setStatusFilter}
      />

      {/* Table */}
      <div className="mt-6">
        <GrantTable
          grants={grants}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
      </div>
    </>
  );
}
