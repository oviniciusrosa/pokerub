import { AppSafeArea } from "~/components";
import { Search, Subtitle, Title } from "./components";

import * as S from "./styles";

export function HomePage() {
  return (
    <>
      <AppSafeArea>
        <S.Container>
          <Title />
          <Subtitle />
          <Search />
        </S.Container>
      </AppSafeArea>
    </>
  );
}
