import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding-horizontal: 25px;
  padding-top: ${Platform.OS === "android" ? 50 : 15}px;
`;

export const PokemonNameContainer = styled.View`
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 42px;

  text-align: center;
`;

export const FloatingPokemonName = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "clip",
})`
  position: absolute;
  right: -35px;
  z-index: -1;

  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.grey_60};
  font-size: 102px;
  opacity: 0.6;

  text-align: center;
`;
