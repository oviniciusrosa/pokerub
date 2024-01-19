import { useRouter } from "expo-router";
import { IPokemon } from "~/interfaces/pokemon";

import * as S from "./styles";

interface Props {
  pokemon: IPokemon;
  index: number;
}

export function PokemonCard({ pokemon, index }: Props) {
  const router = useRouter();

  return (
    <S.Container
      onPress={() => router.push("/pokemon_details")}
      transition={{ type: "timing", delay: 50 * index }}
    >
      <>
        <S.PokemonImage
          source={{ uri: pokemon.imageUrl }}
          resizeMode="contain"
        />
        <S.PokemonName>{pokemon.name}</S.PokemonName>
      </>
    </S.Container>
  );
}
