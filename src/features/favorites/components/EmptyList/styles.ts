import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_600};
  color: ${({ theme }) => theme.colors.grey_60};
  font-size: 16px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.grey_60};
  font-size: 14px;
`;
