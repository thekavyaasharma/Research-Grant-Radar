type Props = {
  totalGrants: number;
  openGrants: number;
  closedGrants: number;
  agencies: number;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
};

export default function DashboardStats({
  totalGrants,
  openGrants,
  closedGrants,
  agencies,
  activeFilter = "All",
  onFilterChange,
}: Props) {
  const cards = [
    {
      title: "Total Grants",
      value: totalGrants,
      valueColor: "text-slate-900",
      icon: "Total",
      filterValue: "All",
    },
    {
      title: "Open Grants",
      value: openGrants,
      valueColor: "text-emerald-600",
      icon: "Open",
      filterValue: "Open",
    },
    {
      title: "Closed Grants",
      value: closedGrants,
      valueColor: "text-red-500",
      icon: "Closed",
      filterValue: "Closed",
    },
    {
      title: "Agencies",
      value: agencies,
      valueColor: "text-blue-600",
      icon: "Org",
      filterValue: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
      {cards.map((card) => {
        const isClickable = card.filterValue !== null && !!onFilterChange;
        const isActive = isClickable && activeFilter === card.filterValue;

        return (
          <div
            key={card.title}
            onClick={
              isClickable ? () => onFilterChange!(card.filterValue as string) : undefined
            }
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={
              isClickable
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onFilterChange!(card.filterValue as string);
                    }
                  }
                : undefined
            }
            className={`rounded-2xl border bg-white p-5 transition-all ${
              isClickable
                ? "cursor-pointer hover:border-slate-300 hover:shadow-sm"
                : ""
            } ${
              isActive
                ? "border-slate-900 ring-1 ring-slate-900"
                : "border-slate-200"
            }`}
          >
            <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
              {card.title}
            </p>

            <h3 className={`text-4xl font-bold mt-3 ${card.valueColor}`}>
              {card.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
