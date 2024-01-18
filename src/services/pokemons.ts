import { httpClient } from "~/api/http_client";
import { IPokemon } from "~/interfaces/pokemon";

export const PokemonsService = {
  getAll: async (): Promise<IPokemon[]> => httpClient.get("/pokemon/"),
};
