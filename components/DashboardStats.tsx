type Props = {
  totalGrants: number;
  openGrants: number;
  closingSoon: number;
  agencies: number;
};

export default function DashboardStats({
  totalGrants,
  openGrants,
  closingSoon,
  agencies,
}: Props) {
  const cards = [
    {
      title: "Total Grants",
      value: totalGrants,
      valueColor: "text-slate-900",
      icon: "Total",
    },
    {
      title: "Open Grants",
      value: openGrants,
      valueColor: "text-emerald-600",
      icon: "Open",
    },
    {
      title: "Closing Soon",
      value: closingSoon,
      valueColor: "text-amber-500",
      icon: "Soon",
    },
    {
      title: "Agencies",
      value: agencies,
      valueColor: "text-blue-600",
      icon: "Org",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            {card.title}
          </p>

          <h3 className={`text-4xl font-bold mt-3 ${card.valueColor}`}>
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
}