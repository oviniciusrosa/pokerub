import { useEffect, useState } from "react";
import { useLoading } from "~/store/loading";

import { PokemonsService } from "~/services/pokemons";
import { IDetailedPokemon } from "~/interfaces/pokemon";
import { useLocalSearchParams } from "expo-router";

export function usePokemonDetails() {
  const pokemonFromParams = useLocalSearchParams();

  const loading = useLoading();

  const [pokemon, setPokemon] = useState<IDetailedPokemon>(null);
  const formattedPokemon = { ...pokemonFromParams, ...pokemon };

  useEffect(() => {
    loading.init();
    PokemonsService.getById(pokemonFromParams.id as string).then((data) => {
      loading.stop();
      setPokemon(data);
    });
  }, [pokemonFromParams.id]);

  return {
    pokemon: formattedPokemon,
  };
}
