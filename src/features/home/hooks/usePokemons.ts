import { useEffect, useState } from "react";
import { PokemonsService } from "~/services/pokemons";
import { useLoading } from "~/store/loading";

export function usePokemons() {
  const loading = useLoading();
  const [pokemons, setPokemons] = useState([]);

  async function loadData() {
    loading.init();

    try {
      const data = await PokemonsService.getAll();
      setPokemons(data);
    } catch (error) {
      // TODO: [] Implementar error catching
    } finally {
      setTimeout(() => {
        loading.stop();
      }, 500);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return [pokemons, loadData] as const;
}
