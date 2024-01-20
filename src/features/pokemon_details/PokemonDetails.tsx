import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  VirtualizedList,
} from "react-native";
import { LoadingDisplay, SnackBarDisplay } from "~/components";
import {
  AbilitiesTab,
  EvolutionsTab,
  GeneralTab,
  Header,
  StatusTab,
  TabOptions,
} from "./components";

import ShadowImage from "../../../assets/images/shadow.png";

import { usePathname } from "expo-router";
import { usePokemonDetails } from "./usePokemonDetails";

import { capitalize } from "~/utils/capitalize";
import { useEffect, useMemo, useRef } from "react";
import { useOpenedTab } from "./store/openedTab";

import * as S from "./styles";
import { ScrollView } from "moti";

export function PokemonDetailsPage() {
  const pageRef = useRef<FlatList>(null);

  const pathname = usePathname();
  const { pokemon } = usePokemonDetails();
  const setTab = useOpenedTab((state) => state.setTab);

  const imageUrl = pokemon?.sprites?.other?.home?.front_default;

  const TAB_CONTENT = useMemo(() => {
    return [
      <GeneralTab pokemon={pokemon} />,
      <StatusTab pokemon={pokemon} />,
      <AbilitiesTab pokemon={pokemon} />,
      <EvolutionsTab pokemon={pokemon} />,
    ];
  }, [pokemon]);

  function onScrollEnd(e) {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setTab(pageNum);
  }

  useEffect(() => {
    // sanitize data
    return () => setTab(0);
  }, []);

  return (
    <>
      <S.Container>
        <Header pokemon={pokemon as any} />

        <ScrollView>
          <PokemonName pokemon={pokemon} />

          {imageUrl && (
            <S.AnimatedImage
              source={{ uri: imageUrl ?? "" }}
              resizeMode="contain"
              style={{ height: 280 }}
            />
          )}
          <S.AnimatedImage
            source={ShadowImage}
            resizeMode="contain"
            style={{
              height: 44,
              width: Dimensions.get("window").width,
              opacity: 0.8,
              marginTop: -25,
            }}
          />

          <TabOptions
            onSelectOption={(option) => {
              pageRef.current.scrollToIndex({
                index: option,
                animated: true,
              });
            }}
          />

          <FlatList
            ref={pageRef}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => item}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={onScrollEnd}
            data={TAB_CONTENT}
          />
        </ScrollView>
      </S.Container>

      {Platform.OS === "ios" && pathname.includes("pokemon_details") && (
        <>
          <SnackBarDisplay />
          <LoadingDisplay />
        </>
      )}
    </>
  );
}

function PokemonName({ pokemon }) {
  return (
    <S.PokemonNameContainer pointerEvents="none">
      <S.PokemonName>{capitalize(pokemon?.name)}</S.PokemonName>
      <S.FloatingPokemonName>{capitalize(pokemon?.name)}</S.FloatingPokemonName>
    </S.PokemonNameContainer>
  );
}
