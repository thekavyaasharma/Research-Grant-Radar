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
    },
    {
      title: "Open Grants",
      value: openGrants,
    },
    {
      title: "Closing Soon",
      value: closingSoon,
    },
    {
      title: "Agencies",
      value: agencies,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
        >
          <p className="text-slate-400 text-sm">
            {card.title}
          </p>

          <h3 className="text-4xl font-bold mt-3">
            {card.value}
          </h3>
        </div>
      ))}
    </div>
  );
}