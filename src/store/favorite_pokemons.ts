import { create } from "zustand";
import { IPokemon } from "~/interfaces/pokemon";

type FavoritePokemonsStore = {
  pokemons: IPokemon[];
  addPokemon: (categories: IPokemon) => void;
};

export const useFavoritePokemons = create<FavoritePokemonsStore>()((set) => ({
  pokemons: [],
  addPokemon: (pokemon) => {
    set((state) => ({
      pokemons: [...state.pokemons, pokemon],
    }));
  },
}));
