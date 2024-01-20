import { Dimensions, Text } from "react-native";
import { useLoading } from "~/store/loading";

import * as S from "./styles";
import LottieView from "lottie-react-native";
import CongratsAnimation from "../../../assets/animations/congrats-animation.json";
import { useEffect, useState } from "react";

export function CongratsDisplay({ visible }: { visible: boolean }) {
  const [visibility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setVisibility(false);
      }, 2000);
    }
  }, [visibility]);

  return (
    <S.Container
      pointerEvents={visibility ? "auto" : "none"}
      animate={{ opacity: visibility ? 1 : 0 }}
      transition={{ type: "timing", duration: 200 }}
    >
      <LottieView
        autoPlay
        source={CongratsAnimation}
        // style={{ width: 60, height: 60 }}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      />
    </S.Container>
  );
}
