import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonsResponse } from "./Response/PokemonsResponse";
import { PokemonResponse } from "./Response/PokemonResponse";
import { PokemonType } from "@/types/Pokemon";

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemon-api.cyclic.app/api/v1/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonsResponse, string | undefined>({
      query: () => {
        return { url: `pokemon`, method: "GET" };
      },
      transformResponse: (
        response: PokemonsResponse,
        _,
        arg: string | undefined
      ) => {
        const transformedResponse = {
          ...response,
          data: {
            data: response.data.data.filter((pokemon) =>
              arg
                ? arg !== "all"
                  ? pokemon.type.includes(arg as PokemonType)
                  : true
                : true
            ),
          },
        };
        return transformedResponse;
      },
    }),
    getPokemon: builder.query<PokemonResponse, string>({
      query: (no: string) => {
        return { url: `pokemon/${no}`, method: "GET" };
      },
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApi;
export default pokemonApi;
