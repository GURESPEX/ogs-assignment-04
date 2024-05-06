import { PokemonType } from "@/types/Pokemon";
import { pokemonTypeColors } from "@/utils/PokemonTypeColors";
import { MdCatchingPokemon } from "react-icons/md";

type Props = {
  type: PokemonType | undefined;
  huge?: boolean;
  texted?: boolean;
  text?: string;
};

const PokemonTypeIcon = ({
  type,
  huge = false,
  texted = false,
  text,
}: Props) => {
  return (
    <div
      className={`relative ${
        huge
          ? `${texted ? "w-max" : "w-10"} h-10`
          : `${texted ? "w-max" : "w-6"} h-6`
      } ${
        texted ? "" : "aspect-square"
      } rounded-md overflow-hidden row items-center`}
    >
      {type && (type as string) !== "all" ? (
        <>
          <div className="row rounded-md z-10 h-full">
            <img
              className={`${huge ? "p-2" : "p-1"} h-full`}
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
              alt={type}
            />
            <p
              className={`${
                huge ? "text-lg p-2" : "text-sm p-1"
              } pl-0 uppercase z-10 row items-center font-semibold text-white`}
            >
              {text ? text : type}
            </p>
          </div>
          <div className={`absolute w-full h-full left-0 top-0 col`}>
            {pokemonTypeColors[type].map((color, index) => (
              <div
                key={index}
                style={{ background: color }}
                className={`relative w-full h-full`}
              />
            ))}
          </div>
          <div
            style={{
              outline: "2px solid rgba(0, 0, 0, 0.1)",
              outlineOffset: -2,
            }}
            className={`absolute w-full h-full left-0 top-0 z-10 rounded-md`}
          />
        </>
      ) : (
        <>
          <MdCatchingPokemon
            style={{
              outline: "2px solid rgba(0, 0, 0, 0.1)",
              outlineOffset: -2,
            }}
            className={`absolute w-full h-full left-0 top-0 ${
              huge ? "p-2" : "p-1"
            } rounded-md z-10 text-white rotate-180`}
          />
          <div className={`absolute w-full h-full left-0 top-0 col`}>
            <div className={`relative w-full h-full bg-red-500`} />
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonTypeIcon;
