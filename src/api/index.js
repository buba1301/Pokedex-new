import { PokemonClient } from 'pokenode-ts';

const app = new PokemonClient();

const config = {
  getPokemons: (limit = 9, offset = 9) =>
    app.listPokemons(offset, limit),
  getPokemonByName: (name) => app.getPokemonByName(name),
  getTypeByName: (name) => app.getTypeByName(name),
};

export default config;
