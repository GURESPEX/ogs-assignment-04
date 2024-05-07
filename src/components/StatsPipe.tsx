import { motion } from "framer-motion";

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
        <motion.div
          initial={{ width: `0%` }}
          animate={{ width: `${amount ? (amount / 155) * 100 : 0}%` }}
          transition={{ ease: [0, 0, 0, 1], duration: 0.5 }}
          className={`h-full ${color || "bg-slate-400"} rounded-full`}
        />
      </div>
    </div>
  );
};

export default StatsPipe;
