import { Pokemon } from "@/types/Pokemon";
import { Link } from "react-router-dom";
import { RiSwordFill } from "react-icons/ri";
import { IoHeart, IoShieldHalf } from "react-icons/io5";
import { GiRubberBoot } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { motion } from "framer-motion";

type Props = { pokemon: Pokemon };

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          y: 8,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
        },
      }}
      whileHover={{ y: -8, filter: "brightness(0.9)" }}
      transition={{ ease: [0, 0, 0, 1] }}
      whileTap={{ y: -4, filter: "brightness(0.8)" }}
    >
      <Link
        className="col drop-shadow-sm"
        key={pokemon.no}
        to={`/${pokemon.no}`}
      >
        <div className="relative col p-4 gap-4 aspect-square object-contain">
          <div className="absolute min-w-max top-full left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 row gap-2 rounded-lg z-20 px-2 bg-slate-300 border-2 border-slate-300 uppercase font-bold text-slate-500 pt-[3px]">
            {pokemon.name}
          </div>
          <img
            className="w-full h-full object-contain z-10 p-4"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
            alt={pokemon.name}
          />
          <div className="absolute left-0 top-0 w-full h-full col justify-end overflow-hidden rounded-lg">
            <div className="relative w-full h-2/3 bg-slate-200 overflow-hidden border-2 border-slate-300 rounded-lg">
              <img
                className="absolute w-full h-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-150 object-contain brightness-0 mix-blend-soft-light"
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
                alt={pokemon.name}
              />
              <img
                className="absolute w-full h-full top-full left-full rotate-180 -translate-x-1/2 -translate-y-1/2 scale-150 object-contain brightness-0 mix-blend-soft-light"
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.no}.png`}
                alt={pokemon.name}
              />
            </div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full col justify-end">
            <div className="relative w-full h-2/3 overflow-hidden border-2 border-transparent rounded-lg">
              <div className="absolute w-full h-full top-0 left-0 row justify-end items-start">
                <div className="relative -top col gap-1 p-1 bg-slate-300 rounded-bl-lg border-b-2 border-l-2 border-transparent">
                  {pokemon.type.map((type) => (
                    <PokemonTypeIcon key={type} type={type} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col border-2 border-slate-100 bg-white -mt-4 pt-8 rounded-b-lg">
          <div className="row p-4 gap-4 justify-evenly overflow-hidden">
            {Object.keys(pokemon.stats).map((key) => (
              <div key={key} className="col items-center gap-2 text-slate-500">
                <div>
                  {key === "hp" && <IoHeart />}
                  {key === "attack" && <RiSwordFill />}
                  {key === "defense" && <IoShieldHalf />}
                  {key === "speed" && <GiRubberBoot />}
                  {key === "special" && <FaStar />}
                  {key === "total" && <FaFire />}
                </div>
                <div className="text-xs font-semibold">
                  {pokemon.stats[key]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PokemonCard;
