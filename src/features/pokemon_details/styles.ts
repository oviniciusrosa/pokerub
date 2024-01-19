import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding-horizontal: 25px;
  padding-top: ${Platform.OS === "android" ? 50 : 15}px;
`;
