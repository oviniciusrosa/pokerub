import { Text } from "moti";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const TabOptionsList: typeof FlatList = styled.FlatList`
  background-color: ${({ theme }) => theme.colors.background};
  padding-vertical: 10px;
  padding-top: 5px;
`;

export const OptionLabel: typeof Text = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.P_600};
  align-items: center;
  gap: 6px;

  margin-bottom: -5px;
`;

export const Pressable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  gap: 6px;
`;
