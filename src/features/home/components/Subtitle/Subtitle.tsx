import React from "react";

import * as S from "./styles";

export function Subtitle() {
  return (
    <>
      <S.AnimatedText transition={{ type: "timing", delay: 100 }}>
        Utilize a barra de pesquisa para encontrar seu Pokemón
      </S.AnimatedText>
    </>
  );
}
