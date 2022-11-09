import { PokemonClient } from 'pokenode-ts';

const app = new PokemonClient();

const config = {
  getPokemons: async (query, limit = 8, offset = 0) => {
    if (query) {
      console.log('API QUERY', query);

      const data = await app.getPokemonByName(query);
      console.log('API QUERY', data.name);
      return [{ name: data.name }];
    }

    const pokemonsList = await app.listPokemons(offset, limit);

    console.log('API', pokemonsList);

    const urls = pokemonsList.results.map(({ name }) =>
      config.getPokemonByName(name)
    );

    const data = await Promise.all(urls);

    console.log('DATA', data);

    return data;
  },
  getPokemonByName: (name) => app.getPokemonByName(name),
  getTypeByName: (name) => app.getTypeByName(name),
  getEggGroupByName: () => app.getEggGroupByName('dragon'),
};

export default config;
