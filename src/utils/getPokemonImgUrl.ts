// const FRONT_IMG_BASE_URL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const FRONT_IMG_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export function getPokemonImgUrl(id: string | number) {
  return `${FRONT_IMG_BASE_URL}/${id}.png`;
}
