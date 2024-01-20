import { IDetailedPokemon } from "~/interfaces/pokemon";
import { capitalize } from "~/utils/capitalize";

import * as S from "./styles";

interface Props {
  pokemon: IDetailedPokemon;
}

export function AbilitiesTab({ pokemon }: Props) {
  return (
    <S.Container>
      {pokemon?.abilities?.map((ability, index) => (
        <S.Info key={index}>
          {capitalize(ability.ability.name).replaceAll("-", " ")}
        </S.Info>
      ))}
    </S.Container>
  );
}
