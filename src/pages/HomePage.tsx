import PokemonCard from "@/components/PokemonCard";
import { useGetPokemonsQuery } from "@/services/PokemonService/pokemonService";
import PokemonCardSkeleton from "@/components/PokemonCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { PokemonType } from "@/types/Pokemon";
import PokemonTypeIcon from "@/components/PokemonTypeIcon";
import Navigation from "@/components/Navigation";
import pokemonLogo from "@/assets/pokemon.svg";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const typeQueryParam = searchParams.get("type") || undefined;
  const { data, isLoading } = useGetPokemonsQuery(typeQueryParam);
  const pokemons = data?.data.data;

  const menus: { text: string; to: PokemonType | "" }[] = [
    { text: "All", to: "" },
    { text: "Normal", to: "normal" },
    { text: "Fire", to: "fire" },
    { text: "Water", to: "water" },
    { text: "Grass", to: "grass" },
    { text: "Flying", to: "flying" },
    { text: "Fighting", to: "fighting" },
    { text: "Poison", to: "poison" },
    { text: "Electric", to: "electric" },
    { text: "Ground", to: "ground" },
    { text: "Rock", to: "rock" },
    { text: "Psychic", to: "psychic" },
    { text: "Ice", to: "ice" },
    { text: "Bug", to: "bug" },
    { text: "Ghost", to: "ghost" },
    // { text: "Steel", to: "steel" },
    { text: "Dragon", to: "dragon" },
    // { text: "Dark", to: "dark" },
    // { text: "Fairy", to: "fairy" },
  ];

  return (
    <>
      <div className="col items-center p-4 py-8 text-slate-600 drop-shadow-sm">
        <img src={pokemonLogo} alt="Pokemon Logo" />
        <p
          style={{
            boxShadow: "0 4px 0 #21386E",
          }}
          className="uppercase font-bold text-xl text-[#FFCB05] px-2 bg-[#2C71B8] rounded"
        >
          Dex
        </p>
      </div>
      <div className="col p-4 mt-[20px] drop-shadow-sm">
        <div className="relative col p-4 pt-[54px] gap-4 text-slate-600 bg-slate-50 border-2 border-slate-100 rounded-lg">
          <Navigation menus={menus} />
          <h1 className="row gap-4">
            <PokemonTypeIcon type={typeQueryParam as PokemonType} huge />
            <div className="text-4xl font-bold">
              {typeQueryParam
                ? typeQueryParam.toUpperCase()
                : "All".toUpperCase()}
            </div>
          </h1>
          {isLoading ? (
            <div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 animate-pulse"
              style={{
                maskImage: "linear-gradient(180deg, #000, transparent)",
              }}
            >
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <PokemonCardSkeleton key={index} />
                ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {pokemons?.map((pokemon) => (
                <PokemonCard key={pokemon.no} pokemon={pokemon} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
