import { Platform, Text } from "react-native";
import { Header } from "./components";
import { useLocalSearchParams, usePathname } from "expo-router";

import * as S from "./styles";
import { SnackBarDisplay } from "~/components";

export function PokemonDetailsPage() {
  const pathname = usePathname();
  const pokemon = useLocalSearchParams();

  return (
    <>
      <S.Container>
        <Header pokemon={pokemon as any} />
        <Text style={{ color: "white" }}>pokemon details</Text>
      </S.Container>

      {Platform.OS === "ios" && pathname.includes("pokemon_details") && (
        <SnackBarDisplay />
      )}
    </>
  );
}
