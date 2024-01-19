import { Text } from "react-native";
import { Header } from "./components";
import { useLocalSearchParams } from "expo-router";

import * as S from "./styles";

export function PokemonDetailsPage() {
  const pokemon = useLocalSearchParams();

  return (
    <S.Container>
      <Header pokemon={pokemon as any} />
      <Text style={{ color: "white" }}>pokemon details</Text>
    </S.Container>
  );
}
