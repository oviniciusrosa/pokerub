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
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  line-height: 36px;
`;

export const Highlight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  line-height: 36px;
`;
