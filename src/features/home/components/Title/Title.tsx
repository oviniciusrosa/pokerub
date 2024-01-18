import React from "react";

import * as S from "./styles";

export function Title() {
  return (
    <>
      <S.AnimatedText transition={{ type: "timing" }}>
        Bem vindo(a)
      </S.AnimatedText>
      <S.AnimatedText transition={{ type: "timing", delay: 50 }}>
        ao <S.Highlight>PokeRub!</S.Highlight>
      </S.AnimatedText>
    </>
  );
}
