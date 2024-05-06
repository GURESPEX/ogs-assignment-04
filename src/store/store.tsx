import { configureStore } from "@reduxjs/toolkit";
import pokemonApi from "@/services/PokemonService/pokemonService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer, // Register Form State
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
