import styled from "styled-components/native";
import { MotiView } from "moti";
import { MotiPressable } from "moti/interactions";

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 20 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export const Container: typeof MotiPressable = styled(MotiPressable).attrs({
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  width: 100%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  gap: 15px;

  background-color: ${({ theme }) => theme.colors.grey_90};
  border-radius: 16px;
  margin-bottom: 15px;

  padding: 15px;
`;

export const PokemonImage = styled.Image`
  width: 55px;
  height: 100%;

  border-radius: 8px;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;
