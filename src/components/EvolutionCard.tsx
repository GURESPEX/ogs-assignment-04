import { useGetPokemonQuery } from "@/services/PokemonService/pokemonService";
import PokemonTypeIcon from "./PokemonTypeIcon";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  no: string | undefined;
  method: string | undefined;
};

const EvolutionCard = ({ no, method }: Props) => {
  const { data, isLoading } = useGetPokemonQuery(no || "");
  const pokemon = data?.data.data[0];

  return isLoading ? (
    <div className="col w-[256px] h-[364px]">
      <div className="relative col items-center justify-center h-full px-4 gap-4 rounded-lg bg-slate-200">
        Loading...
      </div>
    </div>
  ) : (
    <>
      {method && (
        <div className="col justify-center items-center px-4 gap-4 flex-1">
          <p className="capitalize">{method}</p>
          <div>
            <IoIosArrowRoundForward className="text-4xl" />
          </div>
        </div>
      )}
      <div className="col w-[256px]">
        <div className="relative col items-center px-4 gap-4 rounded-lg">
          <img
            className="z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${no}.png`}
            alt={pokemon?.name}
          />
          <div className="absolute w-full h-16 left-0 top-full -translate-y-full bg-slate-200 rounded-t-lg" />
        </div>
        <div className="col items-center p-4 gap-4 bg-slate-200 rounded-b-lg">
          <p className="text-xl font-semibold">#{pokemon?.no}</p>
          <p className="capitalize">{pokemon?.species} Pokémon</p>
          <div className="row justify-center gap-2">
            {pokemon?.type.map((type) => (
              <PokemonTypeIcon key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EvolutionCard;
