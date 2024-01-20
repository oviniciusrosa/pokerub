import { httpClient } from "~/api/http_client";
import {
  IDetailedPokemon,
  IPokemon,
  IPokemonEvolutionChain,
} from "~/interfaces/pokemon";
import { getPokemonImgUrl } from "~/utils/getPokemonImgUrl";

export type IGetPokemonFilter = {
  search?: string;
  params?: {
    limit: number;
    offset: number;
  };
};

function sanitizeData(pokemon: any): IPokemon {
  const [_, unformattedId] = pokemon?.url?.split("pokemon");
  const id = pokemon?.id ?? unformattedId.replaceAll("/", "");

  return {
    id,
    name: pokemon.name,
    imageUrl: getPokemonImgUrl(id),
  };
}

async function getAll(props?: IGetPokemonFilter): Promise<IPokemon[]> {
  const response = await httpClient.get(`/pokemon/${props?.search ?? ""}`, {
    params: props.params,
  });

  if (response.status != 200) {
    throw Error(response.request);
  }

  if (Array.isArray(response.data.results)) {
    return response.data.results.map(sanitizeData);
  }

  return [
    {
      id: response.data.id,
      name: response.data.name,
      imageUrl: getPokemonImgUrl(response.data.id),
    },
  ];
}

async function getById(id: string | number): Promise<IDetailedPokemon> {
  const response = await httpClient.get(`/pokemon/${id}`);

  if (response.status != 200) {
    throw Error(response.request);
  }

  return response.data;
}

async function getEvolutions(
  pokemonName: string
): Promise<IPokemonEvolutionChain> {
  const { data } = await httpClient.get(`/pokemon-species/${pokemonName}`);
  if (!data) return;

  const evolutionChainId = data.evolution_chain.url
    .split("evolution-chain")[1]
    .replaceAll("/", "");

  const response = await httpClient.get(`/evolution-chain/${evolutionChainId}`);

  return response.data;
}

export const PokemonsService = {
  getAll,
  getById,
  getEvolutions,
};
