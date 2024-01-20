import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  View,
  VirtualizedList,
} from "react-native";
import { LoadingDisplay, SnackBarDisplay } from "~/components";
import {
  AbilitiesTab,
  GeneralTab,
  Header,
  StatusTab,
  TabOptions,
} from "./components";

import ShadowImage from "../../../assets/images/shadow.png";

import { usePathname } from "expo-router";
import { usePokemonDetails } from "./usePokemonDetails";

import * as S from "./styles";
import { capitalize } from "~/utils/capitalize";
import { useEffect, useMemo, useRef } from "react";
import { useOpenedTab } from "./store/openedTab";

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
      <View
        style={{
          width: Dimensions.get("window").width - 50,
          height: 1200,
          backgroundColor: "cyan",
        }}
      />,
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

        <VirtualizedList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<PokemonName pokemon={pokemon} />}
          stickyHeaderIndices={[2]}
          renderItem={({ index }) => {
            if (index === 1)
              return (
                <TabOptions
                  onSelectOption={(option) => {
                    pageRef.current.scrollToIndex({
                      index: option,
                      animated: true,
                    });
                  }}
                />
              );

            // categoria, habilidades e evoluções

            if (index === 2) {
              return (
                <FlatList
                  ref={pageRef}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => item}
                  horizontal
                  pagingEnabled
                  onMomentumScrollEnd={onScrollEnd}
                  data={TAB_CONTENT}
                />
              );
            }

            return (
              <>
                {imageUrl && (
                  <Image
                    source={{ uri: imageUrl ?? "" }}
                    resizeMode="contain"
                    style={{ height: 280 }}
                  />
                )}
                <Image
                  source={ShadowImage}
                  resizeMode="contain"
                  style={{
                    height: 44,
                    width: Dimensions.get("window").width,
                    opacity: 0.8,
                    marginTop: -25,
                  }}
                />
              </>
            );
          }}
          keyExtractor={(item) => item.toString()}
          getItemCount={() => 3}
          getItem={(_, index) => index}
        />
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
