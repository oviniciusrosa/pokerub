import { BackButton } from "~/components";
import { FavoriteButton } from "~/components/FavoriteButton";

import { useFavoritePokemons } from "~/store/favorite_pokemons";
import { IPokemon } from "~/interfaces/pokemon";
import { View } from "react-native";

import * as S from "./styles";

interface Props {
  pokemon: IPokemon;
}

export function Header({ pokemon }: Props) {
  const { pokemons, addPokemon, removePokemon } = useFavoritePokemons();

  const isFavorite = Boolean(pokemons.find((p) => p.id === pokemon.id));
  const exihibitionId = `#${pokemon.id.toString().padStart(3, "0")}`;

  function toggleFavorite() {
    if (isFavorite) return removePokemon(pokemon.id);

    addPokemon({
      id: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
    });
  }

  return (
    <S.Container>
      <BackButton />
      <S.PokemonId>{exihibitionId}</S.PokemonId>
      <View style={{ padding: 5, paddingRight: 10 }}>
        <FavoriteButton onChange={toggleFavorite} isCheck={isFavorite} />
      </View>
    </S.Container>
  );
}
