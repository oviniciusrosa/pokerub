import { ReactNode } from "react";

import * as S from "./styles";
import { FavoriteButton } from "~/components/FavoriteButton";
import { IPokemon } from "~/interfaces/pokemon";
import { useFavoritePokemons } from "~/store/favorite_pokemons";
import { useToggleFavorite } from "~/hooks/useToggleFavorite";
import { View } from "react-native";

interface Props {
  pokemon: IPokemon;
  children: ReactNode;
}

export function FavoritePokemon({ pokemon, children }: Props) {
  const [isFavorite, toggleFavorite] = useToggleFavorite(pokemon);

  return (
    <S.Container>
      <View style={{ flex: 1 }}>{children}</View>

      <View style={{ marginBottom: 15 }}>
        <FavoriteButton isCheck={isFavorite} onChange={toggleFavorite} />
      </View>
    </S.Container>
  );
}
