import { httpClient } from "~/api/http_client";
import { IPokemon } from "~/interfaces/pokemon";
import { getPokemonImgUrl } from "~/utils/getPokemonImgUrl";

function sanitizeData(pokemon: any): IPokemon {
  const [_, unformattedId] = pokemon.url.split("pokemon");
  const id = unformattedId.replaceAll("/", "");

  return {
    id,
    name: pokemon.name,
    imageUrl: getPokemonImgUrl(id),
  };
}

export const PokemonsService = {
  getAll: async (): Promise<IPokemon[]> => {
    const response = await httpClient.get("/pokemon/");

    if (response.status != 200) {
      throw Error(response.request);
    }

    return response.data.results.map(sanitizeData);
  },
};
