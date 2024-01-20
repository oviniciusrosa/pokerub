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
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;

  margin-bottom: 10px;
`;
