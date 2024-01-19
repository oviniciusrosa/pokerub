import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonId = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
