import { AppSafeArea, PokemonCard } from "~/components";
import { Search, Subtitle, Title } from "./components";
import { usePokemons } from "./hooks/usePokemons";

import * as S from "./styles";
import { FlatList } from "react-native";
import { useLoading } from "~/store/loading";

export function HomePage() {
  const { isLoading } = useLoading();
  const [pokemons, loadPokemons] = usePokemons();

  return (
    <>
      <AppSafeArea>
        <S.Container>
          <Title />
          <Subtitle />
          <Search />

          <FlatList
            data={pokemons}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 16, paddingBottom: 320 }}
            refreshing={isLoading}
            onRefresh={loadPokemons}
            renderItem={({ item, index }) => (
              <PokemonCard key={item.id} pokemon={item} index={index} />
            )}
          />
        </S.Container>
      </AppSafeArea>
    </>
  );
}
