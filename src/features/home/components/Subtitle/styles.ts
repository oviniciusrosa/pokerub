import styled from "styled-components/native";
import { MotiText } from "moti";

const INIT_STYLE = {
  opacity: 0,
  transform: [{ translateY: 10 }],
};

const IN_SCREEN_STYLE = {
  opacity: 1,
  transform: [{ translateY: 0 }],
};

export const AnimatedText = styled(MotiText).attrs({
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.grey_20};
  font-size: 12px;
`;
