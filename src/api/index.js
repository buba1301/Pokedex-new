import { PokemonClient } from 'pokenode-ts';

const app = new PokemonClient();

const config = {
  getPokemons: async (query, limit = 12, offset = 0) => {
    const pokemonsList = await app.listPokemons(offset, limit);

    const urls = pokemonsList.results.map(({ name }) =>
      config.getPokemonByName(name)
    );

    console.log('API', pokemonsList);

    const data = await Promise.all(urls);

    console.log('DATA', data);

    if (query) {
      console.log('API QUERY', query);

      const filterData = data.filter((pokemon) =>
        pokemon.name.includes(query)
      );
      console.log('API QUERY', filterData);
      return filterData;
    }

    return data;
  },
  getPokemonByName: (name) => app.getPokemonByName(name),
  getTypeByName: (name) => app.getTypeByName(name),
  getEggGroupByName: () => app.getEggGroupByName('dragon'),
};

export default config;
