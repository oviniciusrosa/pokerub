import { IDetailedPokemon } from "~/interfaces/pokemon";
import * as S from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "~/theme";
import { capitalize } from "~/utils/capitalize";
import { View } from "moti";

interface Props {
  pokemon: IDetailedPokemon;
}

export function StatusTab({ pokemon }: Props) {
  return (
    <S.Container>
      {pokemon?.stats?.map((stat) => (
        <Info
          key={stat.stat.name}
          label={stat.stat.name}
          value={stat.base_stat}
        />
      ))}
    </S.Container>
  );
}

function Info({ label, value }) {
  return (
    <S.Row>
      <S.Label>{label}:</S.Label>
      <S.Value>{value}</S.Value>
    </S.Row>
  );
}
