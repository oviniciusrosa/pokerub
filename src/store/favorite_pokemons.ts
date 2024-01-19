import { create } from "zustand";
import { IPokemon } from "~/interfaces/pokemon";

type FavoritePokemonsStore = {
  pokemons: IPokemon[];
  addPokemon: (pokemon: IPokemon) => void;
  removePokemon: (id: number) => void;
};

export const useFavoritePokemons = create<FavoritePokemonsStore>()((set) => ({
  pokemons: [],
  addPokemon: (pokemon) => {
    set((state) => ({
      pokemons: [...state.pokemons, pokemon],
    }));
  },
  removePokemon: (id) => {
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    }));
  },
}));
