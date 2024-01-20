import { IDetailedPokemon } from "~/interfaces/pokemon";
import * as S from "./styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "~/theme";
import { capitalize } from "~/utils/capitalize";

interface Props {
  pokemon: IDetailedPokemon;
}

export function GeneralTab({ pokemon }: Props) {
  if (!pokemon.weight) return <></>;

  return (
    <S.Container>
      <Types pokemon={pokemon} />
      <S.CardContainer>
        <S.Column>
          <S.Row>
            <MaterialCommunityIcons
              name="weight"
              size={26}
              color={theme.colors.white}
            />
            <S.Info>{pokemon.weight / 10}kg</S.Info>
          </S.Row>

          <S.Label>Peso</S.Label>
        </S.Column>

        <S.Divider />

        <S.Column>
          <S.Row>
            <AntDesign name="arrowup" size={26} color={theme.colors.white} />
            <S.Info>{pokemon.weight}m</S.Info>
          </S.Row>

          <S.Label>Altura</S.Label>
        </S.Column>
      </S.CardContainer>
    </S.Container>
  );
}

function Types({ pokemon }) {
  if (!pokemon?.types) return <></>;

  return (
    <S.PokemonTypeContainer>
      {pokemon?.types?.map((item, index) => (
        <S.PokemonTypeCard key={index}>
          <S.PokemonType>{capitalize(item?.type?.name ?? "")}</S.PokemonType>
        </S.PokemonTypeCard>
      ))}
    </S.PokemonTypeContainer>
  );
}
