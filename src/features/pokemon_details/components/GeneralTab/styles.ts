import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 50}px;
`;

export const CardContainer = styled.View`
  padding: 30px 30px;
  justify-content: space-between;

  flex-direction: row;
  flex: 1;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_500};
  color: ${({ theme }) => theme.colors.grey_60};
  font-size: 16px;
`;

export const Divider = styled.View`
  height: 50px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.grey_60};
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 8px;

  width: 100%;
  margin-top: 20px;
`;

export const PokemonTypeCard = styled.View`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.grey_20};

  padding: 5px 10px;
`;

export const PokemonType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.grey_20};
  font-size: 12px;
`;
