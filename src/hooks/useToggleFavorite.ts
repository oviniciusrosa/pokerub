import { useCallback } from "react";
import { IPokemon } from "~/interfaces/pokemon";
import { useFavoritePokemons } from "~/store/favorite_pokemons";

export function useToggleFavorite(pokemon: IPokemon) {
  const { pokemons, addPokemon, removePokemon } = useFavoritePokemons();
  const isFavorite = Boolean(pokemons.find((p) => p.id === pokemon.id));

  const toggleFavorite = useCallback(() => {
    if (isFavorite) return removePokemon(pokemon.id);

    addPokemon(pokemon);
  }, [pokemon]);

  return [isFavorite, toggleFavorite] as const;
}
