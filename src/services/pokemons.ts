import { httpClient } from "~/api/http_client";
import { IPokemon } from "~/interfaces/pokemon";
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

export const PokemonsService = {
  getAll: async (props?: IGetPokemonFilter): Promise<IPokemon[]> => {
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
  },
};
