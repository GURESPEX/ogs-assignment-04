export interface PokemonsResponse {
  status: string;
  results: number;
  data: {
    data: Pokemon[];
  };
}

export interface PokemonResponse {
  status: string;
  requestedAt: string;
  data: {
    data: [Pokemon];
  };
}

export type PokemonType =
  | "all"
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "fighting"
  | "poison"
  | "electric"
  | "ground"
  | "rock"
  | "psychic"
  | "ice"
  | "bug"
  | "ghost"
  // | "steel"
  | "dragon";
// | "dark"
// | "fairy";

export interface Pokemon {
  no: string;
  name: string;
  species: string; // Unique
  type: PokemonType[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
    [key: string]: number;
  };
  evolution: {
    stage?: number;
    method?: string;
    no: string;
    name: string;
  }[];
  moves: {
    byLevelUp: {
      move: string;
      type: PokemonType;
      category: string;
      pp: number;
      power: null; // IDK
      accuracy: number;
      effect: string;
    }[];
  };
}
