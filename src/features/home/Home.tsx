import { AppSafeArea } from "~/components";
import { Subtitle, Title } from "./components";

import * as S from "./styles";
import { Search } from "./components/Search";

export function HomePage() {
  return (
    <AppSafeArea>
      <S.Container>
        <Title />
        <Subtitle />
        <Search />
      </S.Container>
    </AppSafeArea>
  );
}
