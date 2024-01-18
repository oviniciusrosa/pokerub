import { DimensionValue, View } from "react-native";

type Props = { width?: DimensionValue; height?: DimensionValue };

export function EmptyBox({ width, height }: Props) {
  return <View style={{ width, height }} />;
}
