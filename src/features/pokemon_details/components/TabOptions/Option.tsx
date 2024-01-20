import theme from "~/theme";
import { Dot } from "./Dot";

import * as S from "./styles";
import { useOpenedTab } from "../../store/openedTab";

const { white, grey_60 } = theme.colors;

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 10 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export function Option({ item, onSelectOption }) {
  const activeTab = useOpenedTab((state) => state.activeTab);
  const setTab = useOpenedTab((state) => state.setTab);

  const imSelected = activeTab === item.id;

  function selectThisOption() {
    setTab(item.id);
    onSelectOption(item.id);
  }

  return (
    <S.Pressable onPress={selectThisOption}>
      <S.OptionLabel
        transition={{
          type: "timing",
          delay: 50 * (item.id + 1),
          duration: 200,
        }}
        from={INIT_STYLE}
        animate={
          {
            ...IN_SCREEN_STYLE,
            color: imSelected ? white : grey_60,
          } as any
        }
      >
        {item.name}
      </S.OptionLabel>
      {imSelected && <Dot />}
    </S.Pressable>
  );
}
