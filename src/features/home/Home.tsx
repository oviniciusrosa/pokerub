import { FlatList, ImageBackground } from "react-native";
import { AppSafeArea, PokemonCard } from "~/components";
import { Search, Subtitle, Title } from "./components";

import { usePokemons } from "./hooks/usePokemons";
import { useLoading } from "~/store/loading";

import BackgroundImage from "../../../assets/backgrounds/default.png";

import * as S from "./styles";

export function HomePage() {
  const { isLoading } = useLoading();
  const [pokemons, loadPokemons] = usePokemons();

  return (
    <ImageBackground source={BackgroundImage} resizeMode="contain">
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
    </ImageBackground>
  );
}
