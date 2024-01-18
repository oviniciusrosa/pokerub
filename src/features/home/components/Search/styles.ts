import { View } from "moti";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import theme from "~/theme";

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 30 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export const Container = styled(View).attrs({
  transition: {
    type: "spring",
    delay: 150,
  },
  from: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  flex-direction: row;
  align-items: center;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.darker};
  border-radius: 15px;
  height: 45px;

  padding: 0 16px;
  margin-top: 25px;
`;

export const Input: typeof TextInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.grey_60,
})`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`;
