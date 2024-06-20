import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (limit = 151) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};
