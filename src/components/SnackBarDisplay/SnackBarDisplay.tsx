import { useMessage } from "~/store/message";
import { MessageCard } from "./MessageCard";

import * as S from "./styles";
import { usePathname } from "expo-router";
import { Platform } from "react-native";

interface Props {
  root?: boolean;
}

export function SnackBarDisplay({ root = false }: Props) {
  const pathname = usePathname();
  const messages = useMessage((state) => state.activeMessages);

  // This prevent screen presentation "modal" bug on iOS
  const shouldHideElement =
    Platform.OS === "ios" && pathname.includes("pokemon_details") && root;

  return (
    <S.Container
      pointerEvents="none"
      transition={{ duration: 200 }}
      animate={{
        opacity: shouldHideElement ? 0 : 1,
      }}
    >
      <>
        {messages.reverse().map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </>
    </S.Container>
  );
}
