import { PokemonType } from "@/types/Pokemon";
import { Link } from "react-router-dom";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { motion } from "framer-motion";

type Props = {
  menus: { text: string; to: PokemonType | "" }[];
};

const Navigation = ({ menus }: Props) => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 row gap-2 p-4 justify-center drop-shadow-sm">
      <div className="row gap-2 justify-center bg-slate-200 border-2 border-slate-300 p-4 rounded-lg">
        {menus.map((menu) => (
          <>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link key={menu.to} to={menu.to && `/?type=${menu.to}`}>
                <PokemonTypeIcon type={menu.to as PokemonType} huge />
              </Link>
            </motion.div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
