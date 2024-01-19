import { Dimensions, Image, View } from "react-native";

import * as S from "./styles";
import SnorlaxPng from "../../../../../assets/images/snorlax.png";

export function EmptyList() {
  return (
    <View
      style={{
        height: Dimensions.get("window").height / 2 + 150,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={SnorlaxPng}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />

      <S.Title>Ops!</S.Title>
      <S.Text>Ainda não há nada por aqui...</S.Text>
    </View>
  );
}
