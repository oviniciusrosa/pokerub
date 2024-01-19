import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container: typeof TouchableOpacity = styled.TouchableOpacity.attrs(
  {
    activeOpacity: 0.7,
  }
)`
  width: 30px;
  height: 30px;

  border-radius: 8px;
  padding: 5px;

  background-color: rgba(0, 0, 0, 0.8);
`;
