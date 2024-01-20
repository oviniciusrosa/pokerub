import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 50}px;

  padding: 25px;
  align-items: flex-start;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

export const EvolutionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const EvolveText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.primary_150};
  font-size: 16px;
`;
