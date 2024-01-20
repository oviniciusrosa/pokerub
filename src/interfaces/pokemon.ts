export interface IPokemon {
  id: number;
  name: string;
  imageUrl?: string;
}

export interface IPokemonSprites {
  other: {
    home: {
      front_default: string;
    };
    showdown: {
      front_default: string;
    };
  };
}

export interface IPokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface IPokemonSpecie {
  name: string;
  url: string;
}

export interface IDetailedPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;

  species: IPokemonSpecie;

  sprites: IPokemonSprites;
  abilities: IPokemonAbility[];
  stats: IPokemonStats[];
  types: IPokemonType[];
}

export interface IChain {
  evolves_to: IChain[];
  species: IPokemonSpecie;
}

export interface IPokemonEvolutionChain {
  id: number;
  chain: IChain;
}
