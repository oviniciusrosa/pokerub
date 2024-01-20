import { EmptyBox } from "~/components";
import { Option } from "./Option";

import * as S from "./styles";
import { useRef } from "react";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  onSelectOption: (index: number) => void;
}

export const TAB_OPTIONS = [
  { id: 0, name: "Geral" },
  { id: 1, name: "Status" },
  { id: 2, name: "Habilidades" },
  { id: 3, name: "Evoluções" },
];

export function TabOptions({ onSelectOption }: Props) {
  const listRef = useRef<FlatList>(null);

  return (
    <S.TabOptionsList
      ref={listRef}
      data={TAB_OPTIONS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <EmptyBox width={20} />}
      contentContainerStyle={{ paddingHorizontal: 25 }}
      renderItem={({ item }) => (
        <Option item={item} onSelectOption={onSelectOption} />
      )}
      /// Overrides Scroll Failure
      onScrollToIndexFailed={(info) => null}
    />
  );
}
