const BASE_URL = `http://www.omdbapi.com/?apikey=`;
const APIKEY = `${import.meta.env.VITE_OMDB_APIKEY}`;

export const searchMovieTitle = async (titleQuery) => {
  try {
    const response = await fetch(`${BASE_URL + APIKEY}&s=${titleQuery}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
};

export const searchMovieId = async (imdbId) => {
    try {
        const response = await fetch(`${BASE_URL + APIKEY}&i=${imdbId}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error.message);
      }
}
