import { PokemonClient } from 'pokenode-ts';

const app = new PokemonClient();

const config = {
  getPokemons: (limit, offset = 0) => app.listPokemons(offset, limit),
  getPokemonByName: (name) => app.getPokemonByName(name),
};

export default config;
