import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import theme from "~/theme";

const { colors } = theme;

interface Props {
  isCheck: boolean;
  onChange: (newValue: boolean) => void;
}

export function FavoriteButton({ isCheck, onChange }: Props) {
  return (
    <S.Container onPress={() => onChange(!isCheck)}>
      <AntDesign
        size={22}
        name={isCheck ? "heart" : "hearto"}
        color={isCheck ? colors.danger : colors.white}
      />
    </S.Container>
  );
}
