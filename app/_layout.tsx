import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import theme from "../src/theme";

import "react-native-reanimated";
import "react-native-gesture-handler";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

export default function AppLayout() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      {/* <Slot /> */}
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="pokemon_details"
          options={{ presentation: "modal" }}
        />
      </Stack>

      <StatusBar style="light" />
    </ThemeProvider>
  );
}
