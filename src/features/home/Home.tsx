import { Text } from "react-native";

import * as S from "./styles";
import { Link } from "expo-router";

export function HomePage() {
  return (
    <S.Container>
      <Link href="/pokemon_details" asChild>
        <Text style={{ color: "#FFFFFF" }}>home</Text>
      </Link>
    </S.Container>
  );
}
