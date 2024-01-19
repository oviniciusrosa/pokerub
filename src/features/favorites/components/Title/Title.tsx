import * as S from "./styles";

export function Title() {
  return (
    <S.AnimatedText transition={{ type: "timing" }}>
      Seus <S.Highlight>Favoritos</S.Highlight>
    </S.AnimatedText>
  );
}
