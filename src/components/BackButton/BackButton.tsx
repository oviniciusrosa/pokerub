import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import theme from "~/theme";
import { useRouter } from "expo-router";

interface Props {
  onBack?: () => Promise<void>;
}

export function BackButton({ onBack }: Props) {
  const router = useRouter();

  async function goBack() {
    if (onBack) await onBack();
    router.back();
  }

  return (
    <S.Container onPress={goBack}>
      <Feather name="chevron-left" size={22} color={theme.colors.white} />
    </S.Container>
  );
}
