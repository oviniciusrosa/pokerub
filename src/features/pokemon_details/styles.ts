import { MotiImage, MotiText } from "moti";
import { Platform } from "react-native";
import styled from "styled-components/native";

const INIT_STYLE = { opacity: 0, transform: [{ translateX: 50 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateX: 0 }] };

export const Container = styled.View`
  padding-horizontal: 25px;
  padding-top: ${Platform.OS === "android" ? 50 : 15}px;
`;

export const AnimatedImage = styled(MotiImage).attrs({
  resizeMode: "contain",
  transition: {
    type: "timing",
    delay: 300,
  },
  from: { opacity: 0, transform: [{ translateY: 30 }] },
  animate: { opacity: 1, transform: [{ translateY: 0 }] },
})`
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const PokemonNameContainer = styled.View`
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const PokemonName = styled(MotiText).attrs({
  transition: {
    type: "timing",
    duration: 600,
  },
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 42px;

  text-align: center;
`;

export const FloatingPokemonName = styled(MotiText).attrs({
  numberOfLines: 1,
  ellipsizeMode: "clip",

  transition: {
    type: "timing",
    duration: 600,
    delay: 100,
  },
  from: INIT_STYLE,
  animate: { opacity: 1, transform: [{ translateX: -10 }] },
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
