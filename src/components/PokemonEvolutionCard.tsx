import { Pokemon, PokemonType } from "@/types/Pokemon";
import EvolutionCard from "./EvolutionCard";
import { pokemonTypeColors } from "@/utils/PokemonTypeColors";

type Props = {
  pokemon: Pokemon | undefined;
};

const PokemonEvolutionCard = ({ pokemon }: Props) => {
  return (
    <div className="col gap-4">
      <div className="row justify-center gap-2 p-4">
        <h3
          style={{
            outline: "2px solid rgba(0, 0, 0, 0.1)",
            outlineOffset: -2,
          }}
          className="relative font-bold uppercase text-3xl rounded-lg px-4 py-2 overflow-hidden"
        >
          <p className="relative font-semibold z-10 text-white">
            Evolution Chain
          </p>
          <div className="absolute top-0 left-0 w-full h-full col">
            {pokemonTypeColors[pokemon?.type[0] as PokemonType].map(
              (color, index) => (
                <div
                  key={index}
                  style={{ background: color }}
                  className="w-full h-full"
                />
              )
            )}
          </div>
          <div
            style={{
              outline: "2px solid rgba(0, 0, 0, 0.1)",
              outlineOffset: -2,
            }}
            className="absolute top-0 left-0 w-full h-full col"
          />
        </h3>
      </div>
      <div className="row justify-center gap-4">
        {pokemon?.evolution.length ? (
          pokemon?.evolution.map(({ no, method }) => (
            <EvolutionCard key={no} no={no} method={method} />
          ))
        ) : (
          <h2 className="p-16 uppercase text-4xl bg-slate-200 w-full row justify-center rounded-lg">
            Empty Evolution Stage
          </h2>
        )}
      </div>
    </div>
  );
};

export default PokemonEvolutionCard;
