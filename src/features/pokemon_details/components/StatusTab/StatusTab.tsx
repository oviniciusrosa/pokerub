import { IDetailedPokemon } from "~/interfaces/pokemon";
import { capitalize } from "~/utils/capitalize";

import * as S from "./styles";

interface Props {
  pokemon: IDetailedPokemon;
}

export function StatusTab({ pokemon }: Props) {
  return (
    <S.Container>
      {pokemon?.stats?.map((stat, index) => (
        <Info key={index} label={stat.stat.name} value={stat.base_stat} />
      ))}
    </S.Container>
  );
}

function Info({ label, value }) {
  return (
    <S.Row>
      <S.Label>{capitalize(label)}:</S.Label>
      <S.Value>{value}</S.Value>
    </S.Row>
  );
}
