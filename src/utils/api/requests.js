const API_KEY = "60c313f35baf563a90f5728547e14022";
const baseUrl = "https://api.themoviedb.org/3"
export const requests = {
    fetchTrending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en=US`,

    fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en=US`,

    fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

