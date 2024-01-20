import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { LoadingDisplay, SnackBarDisplay } from "~/components";

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

import "react-native-get-random-values";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

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
          options={{
            presentation: "modal",
            contentStyle: { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        />
      </Stack>

      <LoadingDisplay />
      <SnackBarDisplay root />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
