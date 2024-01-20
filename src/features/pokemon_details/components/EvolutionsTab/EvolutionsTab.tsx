import { IChain, IDetailedPokemon } from "~/interfaces/pokemon";
import { capitalize } from "~/utils/capitalize";

import * as S from "./styles";
import { useEffect, useState } from "react";
import { PokemonsService } from "~/services/pokemons";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import theme from "~/theme";

interface Props {
  pokemon: IDetailedPokemon;
}

function getSpecieName(chain: IChain, list: string[]): string[] {
  if (chain.evolves_to.length === 0) {
    return [...list, chain.species.name];
  }

  return getSpecieName(chain.evolves_to[0], [...list, chain.species.name]);
}

export function EvolutionsTab({ pokemon }: Props) {
  const [evolutions, setEvolutions] = useState<string[]>([]);

  async function loadData() {
    const data = await PokemonsService.getEvolutions(pokemon.name);
    if (data) {
      setEvolutions(getSpecieName(data.chain, []));
    }
  }

  useEffect(() => {
    if (pokemon.name) loadData();
  }, [pokemon]);

  return (
    <S.Container>
      {evolutions?.map((specie, index) => (
        <S.Row>
          {specie === pokemon.name ? (
            <AntDesign
              name="arrowright"
              size={18}
              color={theme.colors.primary_150}
            />
          ) : (
            <View style={{ width: 18 }} />
          )}
          <S.Info
            key={index}
            style={{
              color:
                specie === pokemon.name
                  ? theme.colors.primary
                  : theme.colors.white,
            }}
          >
            {capitalize(specie)}
          </S.Info>
        </S.Row>
      ))}
    </S.Container>
  );
}
