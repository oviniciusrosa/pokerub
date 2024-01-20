import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width - 50}px;

  padding: 25px;
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
  justify-content: space-between;
  gap: 8px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_500};
  color: ${({ theme }) => theme.colors.grey_20};
  font-size: 16px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
