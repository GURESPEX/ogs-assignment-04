import PokemonDetailCard from "@/components/PokemonDetailCard";
import PokemonEvolutionCard from "@/components/PokemonEvolutionCard";
import { useGetPokemonQuery } from "@/services/PokemonService/pokemonService";
import { MdCatchingPokemon, MdNavigateBefore } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import pokemonLogo from "@/assets/pokemon.svg";
import { pokemonTypeColors } from "@/utils/PokemonTypeColors";
import { PokemonType } from "@/types/Pokemon";
import NotFoundPage from "./NotFoundPage";

const DetailPage = () => {
  const { no } = useParams();
  const { data, isLoading } = useGetPokemonQuery(no || "");
  const pokemon = data?.data.data[0];

  console.log(pokemon);

  return (
    <>
      {isLoading ? (
        <>
          <div
            style={{
              outline: "2px solid rgba(0, 0, 0, 0.05)",
              outlineOffset: -2,
            }}
            className="row items-center p-4 gap-4 rounded-b-lg bg-slate-200"
          >
            <Link
              className="rounded-full p-2 border-2 bg-white border-slate-100 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200 active:border-slate-300 transition"
              to="/"
            >
              <MdNavigateBefore className="text-4xl" />
            </Link>
            <Link
              className="row items-center p-4 gap-4 bg-black bg-opacity-5 rounded-lg"
              to="/"
            >
              <img className="h-12" src={pokemonLogo} alt="Pokemon Logo" />
              <p
                style={{
                  boxShadow: "0 2px 0 #21386E",
                }}
                className="uppercase font-bold text-2xl text-[#FFCB05] px-2 bg-[#2C71B8] rounded"
              >
                Dex
              </p>
            </Link>
          </div>
          <div className="col p-4 gap-4 text-slate-600 h-full animate-pulse">
            <div className="col gap-4 justify-center items-center h-full">
              <MdCatchingPokemon className="text-slate-300 w-64 h-64" />
              <p className=" text-slate-300 text-xl">Loading...</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {pokemon ? (
            <>
              <div
                style={{
                  outline: "2px solid rgba(0, 0, 0, 0.1)",
                  outlineOffset: -2,
                  background:
                    pokemonTypeColors[pokemon?.type[0] as PokemonType][0],
                }}
                className="row items-center p-4 gap-4 rounded-b-lg"
              >
                <Link
                  className="rounded-full p-2 border-2 bg-white border-slate-100 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200 active:border-slate-300 transition"
                  to="/"
                >
                  <MdNavigateBefore className="text-4xl" />
                </Link>
                <Link
                  className="row items-center p-4 gap-4 bg-black bg-opacity-10 rounded-lg"
                  to="/"
                >
                  <img className="h-12" src={pokemonLogo} alt="Pokemon Logo" />
                  <p
                    style={{
                      boxShadow: "0 2px 0 #21386E",
                    }}
                    className="uppercase font-bold text-2xl text-[#FFCB05] px-2 bg-[#2C71B8] rounded"
                  >
                    Dex
                  </p>
                </Link>
              </div>
              <div className="col p-4 gap-4 text-slate-600">
                <div className="col gap-4">
                  <PokemonDetailCard pokemon={pokemon} />
                  <PokemonEvolutionCard pokemon={pokemon} />
                </div>
              </div>
            </>
          ) : (
            <NotFoundPage />
          )}
        </>
      )}
    </>
  );
};

export default DetailPage;
