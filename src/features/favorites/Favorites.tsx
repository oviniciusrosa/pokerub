import { FlatList, ImageBackground } from "react-native";
import { AppSafeArea, PokemonCard } from "~/components";

import { useFavoritePokemons } from "~/store/favorite_pokemons";

import * as S from "./styles";
import { Subtitle, Title } from "./components";
import { FavoritePokemon } from "./components/FavoritePokemonCard";
import { EmptyList } from "./components/EmptyList";

export function FavoritesPage() {
  const pokemons = useFavoritePokemons((state) => state.pokemons);

  return (
    <AppSafeArea>
      <S.Container>
        <Title />
        <Subtitle />

        <FlatList
          data={pokemons}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 320 }}
          renderItem={({ item, index }) => (
            <FavoritePokemon key={item.id} pokemon={item}>
              <PokemonCard pokemon={item} index={index} />
            </FavoritePokemon>
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </S.Container>
    </AppSafeArea>
  );
}
