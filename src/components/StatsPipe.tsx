type Props = {
  title: string;
  amount: number | undefined;
  color?: string;
};

const StatsPipe = ({ title, amount, color }: Props) => {
  return (
    <div className="col">
      <div className="row justify-between gap-4 uppercase text-xs font-semibold">
        <p>{title}</p>
        <p>{amount}</p>
      </div>
      <div className="w-full h-1 row justify-start bg-slate-300 rounded-full overflow-hidden">
        <div
          style={{ width: `${amount}%` }}
          className={`h-full ${color || "bg-slate-400"} rounded-full`}
        />
      </div>
    </div>
  );
};

export default StatsPipe;
