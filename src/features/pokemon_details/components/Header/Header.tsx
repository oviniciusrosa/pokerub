import { useState } from "react";

import { BackButton } from "~/components";
import { FavoriteButton } from "~/components/FavoriteButton";

import * as S from "./styles";
import { useFavoritePokemons } from "~/store/favorite_pokemons";
import { IPokemon } from "~/interfaces/pokemon";

interface Props {
  pokemon: IPokemon;
}

export function Header({ pokemon }: Props) {
  const { pokemons, addPokemon, removePokemon } = useFavoritePokemons();

  const isFavorite = Boolean(pokemons.find((p) => p.id === pokemon.id));
  const exihibitionId = `#${pokemon.id.toString().padStart(3, "0")}`;

  function toggleFavorite() {
    if (isFavorite) return removePokemon(pokemon.id);

    addPokemon(pokemon);
  }

  return (
    <S.Container>
      <BackButton />
      <S.PokemonId>{exihibitionId}</S.PokemonId>
      <FavoriteButton onChange={toggleFavorite} isCheck={isFavorite} />
    </S.Container>
  );
}
