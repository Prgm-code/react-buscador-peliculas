const API_KEY = import.meta.env.VITE_API_KEY_OMDBAPI;


export const searchMovies = async ({search}  ) => {
    if (search ==="") return null;

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
        const data = await response.json();

        const movies = data.Search;

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
        }));
    
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching movies");
    }
}