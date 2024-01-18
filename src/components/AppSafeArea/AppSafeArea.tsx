import React, { ReactElement } from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

type Props = { children: ReactElement | ReactElement[] };

const { statusBarHeight } = Constants;

export function AppSafeArea({ children }: Props) {
  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight }}>
      {children}
    </SafeAreaView>
  );
}
