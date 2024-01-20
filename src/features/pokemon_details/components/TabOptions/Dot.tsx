import { View } from "moti";
import theme from "~/theme";

const INIT_STYLE = { opacity: 0, transform: [{ scale: 0 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ scale: 1 }] };

export function Dot() {
  return (
    <View
      from={INIT_STYLE}
      animate={IN_SCREEN_STYLE}
      transition={{ type: "spring", duration: 300 }}
      style={{
        width: "70%",
        height: 2,
        borderRadius: 10,
        backgroundColor: theme.colors.white,
      }}
    />
  );
}
