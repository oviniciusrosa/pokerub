import React, { useState } from "react";

import FeatherIcon from "@expo/vector-icons/Feather";

import * as S from "./styles";
import theme from "~/theme";

const { colors } = theme;

export function Search() {
  const [isFocusRequested, setIsFocusRequested] = useState(false);

  return (
    <S.Container>
      <FeatherIcon
        name="search"
        size={18}
        color={isFocusRequested ? colors.white : colors.grey_60}
      />

      <S.Input
        placeholder="Buscar Pokemón..."
        onFocus={() => setIsFocusRequested(true)}
        onBlur={() => setIsFocusRequested(false)}
      />
    </S.Container>
  );
}
