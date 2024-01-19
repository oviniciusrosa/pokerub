import { create } from "zustand";
import { IPokemon } from "~/interfaces/pokemon";
import { useMessage } from "./message";

type FavoritePokemonsStore = {
  pokemons: IPokemon[];
  addPokemon: (pokemon: IPokemon) => void;
  removePokemon: (id: number) => void;
};

export const useFavoritePokemons = create<FavoritePokemonsStore>()((set) => {
  const showMessage = useMessage.getState().showMessage;

  return {
    pokemons: [],
    addPokemon: (pokemon) => {
      showMessage({
        text: `O Pokemón ${pokemon.name} foi salvo nos favoritos!`,
      });

      set((state) => ({
        pokemons: [...state.pokemons, pokemon],
      }));
    },
    removePokemon: (id) => {
      set((state) => {
        const pokemon = state.pokemons.find((p) => p.id === id);

        showMessage({
          text: `Removido ${pokemon.name} dos favoritos!`,
        });
        return {
          pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
        };
      });
    },
  };
});
