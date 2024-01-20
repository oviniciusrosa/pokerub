import { IChain, IDetailedPokemon } from "~/interfaces/pokemon";
import { capitalize } from "~/utils/capitalize";

import * as S from "./styles";
import { useEffect, useState } from "react";
import { PokemonsService } from "~/services/pokemons";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import theme from "~/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useFavoritePokemons } from "~/store/favorite_pokemons";
import { useLoading } from "~/store/loading";

const { colors } = theme;

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
        <EvolutionRow
          key={index}
          specie={specie}
          index={index}
          pokemon={pokemon}
          evolutions={evolutions}
        />
      ))}
    </S.Container>
  );
}

function EvolutionRow({ pokemon, specie, index, evolutions }) {
  const router = useRouter();
  const loading = useLoading();

  const favorites = useFavoritePokemons((state) => state.pokemons);
  const evolvePokemon = useFavoritePokemons((state) => state.evolvePokemon);

  const isFavorite = Boolean(favorites.find((p) => p.id === pokemon.id));
  const imSelected = specie === pokemon.name;
  const imPreviousEvolution =
    index < evolutions.findIndex((e) => e === pokemon.name);

  async function getEvolvedPokemon() {
    loading.init();

    const data = await PokemonsService.getAll({ search: specie });
    evolvePokemon(pokemon.id, data[0]);

    setTimeout(() => {
      router.push({
        pathname: `/pokemon_details/${data[0].id}}`,
        params: { ...data[0], evolved: true },
      });
      loading.stop();
    }, 500);
  }

  return (
    <S.EvolutionContainer>
      <S.Row>
        {imSelected ? (
          <AntDesign
            name="arrowright"
            size={18}
            color={theme.colors.primary_150}
          />
        ) : (
          <View style={{ width: 18 }} />
        )}

        <S.Info
          style={{
            color: imSelected ? colors.primary : colors.white,
          }}
        >
          {capitalize(specie)}
        </S.Info>
      </S.Row>

      {!imSelected && !imPreviousEvolution && isFavorite && (
        <TouchableOpacity activeOpacity={0.7} onPress={getEvolvedPokemon}>
          <S.EvolveText>Evoluir</S.EvolveText>
        </TouchableOpacity>
      )}
    </S.EvolutionContainer>
  );
}
