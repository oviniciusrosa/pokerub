import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { AppSafeArea, LoadingIcon, PokemonCard } from "~/components";
import { Search, Subtitle, Title } from "./components";

import { usePokemons } from "./hooks/usePokemons";

import BackgroundImage from "../../../assets/backgrounds/default.png";

import * as S from "./styles";

export function HomePage() {
  const { pokemons, loadPokemons, loadMore, onSearch } = usePokemons();

  return (
    <ImageBackground
      source={BackgroundImage}
      resizeMode="contain"
      imageStyle={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
      }}
    >
      <AppSafeArea>
        <S.Container>
          <Title />
          <Subtitle />
          <Search onChange={onSearch} />

          <FlatList
            data={pokemons}
            onEndReached={loadMore}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 8, paddingBottom: 180 }}
            style={{ marginTop: 8 }}
            refreshing={false}
            onRefresh={loadPokemons}
            renderItem={({ item, index }) => {
              const isLastElement: boolean = index === pokemons.length - 1;
              const isSearching: boolean = pokemons.length === 1;

              return (
                <View>
                  <PokemonCard
                    key={item.id}
                    pokemon={item}
                    index={index <= 20 ? index : 0}
                  />
                  {isLastElement && !isSearching && (
                    <S.LoadingContainer>
                      <LoadingIcon />
                    </S.LoadingContainer>
                  )}
                </View>
              );
            }}
          />
        </S.Container>
      </AppSafeArea>
    </ImageBackground>
  );
}
