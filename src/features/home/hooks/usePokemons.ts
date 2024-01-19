import { useEffect, useState } from "react";
import { IGetPokemonFilter, PokemonsService } from "~/services/pokemons";
import { useLoading } from "~/store/loading";
import { debounce } from "~/utils/debounce";

const CONTENT_SIZE = 20;

export function usePokemons() {
  const loading = useLoading();
  const [localLoading, setLocalLoading] = useState<boolean>(false);

  const [pokemons, setPokemons] = useState([]);
  const [filters, setFilters] = useState<IGetPokemonFilter>({
    params: { limit: CONTENT_SIZE, offset: CONTENT_SIZE },
    search: "",
  });

  function onSearch(search: string) {
    debounce(async () => {
      const currentFilters: IGetPokemonFilter = {
        search: search.toLowerCase(),
        params: { limit: CONTENT_SIZE, offset: CONTENT_SIZE },
      };

      await loadPokemons(currentFilters);
    }, 600);
  }

  async function loadMore() {
    if (localLoading) return;
    if (pokemons.length < CONTENT_SIZE) return;

    const currentFilters: IGetPokemonFilter = {
      search: filters.search,
      params: {
        limit: filters.params.limit,
        offset: filters.params.offset + CONTENT_SIZE,
      },
    };

    try {
      const data = await PokemonsService.getAll(currentFilters);
      setPokemons((oldState) => [...oldState, ...data]);
    } catch (error) {
      // TODO: [] Implementar error catching
    } finally {
      setFilters(currentFilters);
    }
  }

  async function loadPokemons(customFilter?: IGetPokemonFilter) {
    loading.init();
    setLocalLoading(true);

    try {
      const data = await PokemonsService.getAll(customFilter ?? filters);
      setPokemons(data);
    } catch (error) {
      // TODO: [] Implementar error catching
    } finally {
      setLocalLoading(false);
      setTimeout(() => {
        loading.stop();
      }, 500);
    }
  }

  useEffect(() => {
    // wait for animations
    setTimeout(loadPokemons, 400);
  }, []);

  return { pokemons, loadPokemons, loadMore, onSearch };
}
