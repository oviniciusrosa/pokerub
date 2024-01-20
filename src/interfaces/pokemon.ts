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

export interface IPokemonMove {
  move: {
    name: string;
    url: string;
  };
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

export interface IDetailedPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;

  sprites: IPokemonSprites;
  moves: IPokemonMove[];
  stats: IPokemonStats[];
  types: IPokemonType[];
}
