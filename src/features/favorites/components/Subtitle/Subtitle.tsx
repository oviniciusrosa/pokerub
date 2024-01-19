import React from "react";

import * as S from "./styles";

export function Subtitle() {
  return (
    <>
      <S.AnimatedText transition={{ type: "timing", delay: 100 }}>
        Abaixo você encontra todos os Pokemóns que você mais curtiu! Pressione o
        card para obter mais informações sobre ele.
      </S.AnimatedText>
    </>
  );
}
