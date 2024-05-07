import { Pokemon, PokemonType } from "@/types/Pokemon";
import PokemonTypeIcon from "./PokemonTypeIcon";
import StatsPipe from "./StatsPipe";
import { Link } from "react-router-dom";
import {
  MdCatchingPokemon,
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md";
import { pokemonTypeColors } from "@/utils/PokemonTypeColors";

type Props = {
  pokemon: Pokemon | undefined;
};

const PokemonDetailCard = ({ pokemon }: Props) => {
  return (
    <div className="col gap-4 rounded-lg overflow-hidden">
      <div className="col items-center gap-2 p-4">
        <h2 className="font-bold uppercase text-4xl">{pokemon?.name}</h2>
        <h3
          style={{
            outline: "2px solid rgba(0, 0, 0, 0.1)",
            outlineOffset: -2,
          }}
          className="relative capitalize text-xl rounded-lg px-4 py-2 overflow-hidden"
        >
          <p className="relative font-semibold z-10 text-white">
            {pokemon?.species} Pokémon
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
      <div style={{ perspective: 1024 }} className="row gap-4">
        <div className="col justify-center">
          <Link
            className="rounded-full p-2 border-2 bg-white border-slate-100 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200 active:border-slate-300 transition"
            to={`/${("000" + (parseInt(pokemon?.no as string) - 1)).slice(-3)}`}
          >
            <MdNavigateBefore className="text-4xl" />
          </Link>
        </div>
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(30deg)",
            transformOrigin: "left",
          }}
          className="col w-full rounded-lg bg-slate-200 border-2 border-slate-300"
        >
          <h2 className="p-4 uppercase font-semibold text-xl text-center bg-slate-300">
            Information
          </h2>
          <div className="col p-4 gap-4">
            <table>
              <tr>
                <td className="p-0 align-top">
                  <div className="row items-start justify-end gap-2 p-2 flex-wrap font-semibold">
                    No.
                  </div>
                </td>
                <td className="p-0 align-top">
                  <div className="row items-start gap-2 p-2 flex-wrap font-semibold">
                    {pokemon?.no}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-0 align-top">
                  <div className="row items-start justify-end gap-2 p-2 flex-wrap font-semibold">
                    Name
                  </div>
                </td>
                <td className="p-0 align-top">
                  <div className="row items-start gap-2 p-2 flex-wrap font-semibold">
                    {pokemon?.name}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-0 align-top">
                  <div className="row items-start justify-end gap-2 p-2 flex-wrap font-semibold">
                    Species
                  </div>
                </td>
                <td className="p-0 align-top">
                  <div className="row items-start gap-2 p-2 flex-wrap font-semibold">
                    {pokemon?.species}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-0 align-top">
                  <div className="row items-start justify-end gap-2 p-2 flex-wrap font-semibold">
                    Type
                  </div>
                </td>
                <td className="p-0 align-top">
                  <div className="row items-start gap-2 p-2 flex-wrap font-semibold">
                    {pokemon?.type.map((type) => (
                      <PokemonTypeIcon key={type} type={type} texted />
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-0 align-top">
                  <div className="row items-start justify-end gap-2 p-2 flex-wrap font-semibold">
                    Abilities
                  </div>
                </td>
                <td className="p-0 align-top">
                  <div className="row items-start gap-2 p-2 flex-wrap font-semibold">
                    {pokemon?.moves.byLevelUp
                      .reduce(
                        (
                          uniqueAbilities: {
                            move: string;
                            type: PokemonType;
                            category: string;
                            pp: number;
                            power: null;
                            accuracy: number;
                            effect: string;
                          }[],
                          ability
                        ) => {
                          if (
                            !uniqueAbilities.find(
                              (value) => value.move === ability.move
                            )
                          ) {
                            uniqueAbilities.push(ability);
                          }
                          return uniqueAbilities;
                        },
                        []
                      )
                      .map((ability) => (
                        <PokemonTypeIcon
                          key={ability.move}
                          type={ability.type}
                          texted
                          text={ability.move}
                        />
                      ))
                      .splice(0, 5)}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="relative col justify-center rounded-lg aspect-square w-full max-w-[512px] p-16">
          <img
            className="z-10"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon?.no}.png`}
            alt={pokemon?.name}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full row justify-center items-center">
            <MdCatchingPokemon className="w-full h-full aspect-square text-slate-300" />
          </div>
        </div>
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg)",
            transformOrigin: "right",
          }}
          className="col w-full rounded-lg bg-slate-200 border-2 border-slate-300"
        >
          <h2 className="p-4 uppercase font-semibold text-xl text-center bg-slate-300">
            Stats
          </h2>
          <div className="col p-4 gap-4 h-full">
            <div className="row justify-center items-center h-full">
              <div
                style={{
                  boxShadow: "0 -16px 32px #0003 inset",
                  background:
                    pokemonTypeColors[pokemon?.type[0] as PokemonType][0],
                }}
                className="relative w-48 aspect-square bg-slate-700 rounded-full row justify-center items-center border-4 border-slate-300"
              >
                <p className="font-semibold text-4xl text-white">
                  {pokemon?.stats.total}
                </p>
                <p className="absolute w-full h-full top-0 left-0 row justify-center p-4 uppercase text-white text-xs">
                  Power
                </p>
              </div>
            </div>
            <div className="col gap-4">
              <StatsPipe
                color="bg-green-400"
                title="Hp"
                amount={pokemon?.stats.hp}
              />
              <StatsPipe
                color="bg-red-400"
                title="Attack"
                amount={pokemon?.stats.attack}
              />
              <StatsPipe
                color="bg-blue-400"
                title="Defense"
                amount={pokemon?.stats.defense}
              />
              <StatsPipe
                color="bg-sky-400"
                title="Speed"
                amount={pokemon?.stats.speed}
              />
              <StatsPipe
                color="bg-pink-400"
                title="Special"
                amount={pokemon?.stats.special}
              />
            </div>
          </div>
        </div>
        <div className="col justify-center">
          <Link
            className="rounded-full p-2 border-2 bg-white border-slate-100 hover:bg-slate-100 hover:border-slate-200 active:bg-slate-200 active:border-slate-300 transition"
            to={`/${("000" + (parseInt(pokemon?.no as string) + 1)).slice(-3)}`}
          >
            <MdNavigateNext className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
