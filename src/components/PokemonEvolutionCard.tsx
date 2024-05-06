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
            {pokemonTypeColors[pokemon?.type[0] as PokemonType].map((color) => (
              <div style={{ background: color }} className="w-full h-full" />
            ))}
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
      <div className="row">
        {pokemon?.evolution.map(({ no, method }) => (
          <EvolutionCard key={no} no={no} method={method} />
        ))}
      </div>
    </div>
  );
};

export default PokemonEvolutionCard;
