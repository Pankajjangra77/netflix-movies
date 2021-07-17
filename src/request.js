const {REACT_APP_API_KEY} = process.env;
export const baseUrl = 'https://image.tmdb.org/t/p/original';

const requests = {
    fetchTrending : `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=hi-IN`,
    fetchNetflixOriginals : `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=hi-IN`,
    fetchMoviePopular: `/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    fetchActionMovies : `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99`,
    fetchPopularTVShows : `/tv/popular?api_key=${REACT_APP_API_KEY}&&language=en-US`,
    fetchIndianMovies : `/discover/movie?api_key=${REACT_APP_API_KEY}&region=IN`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    fetchGenresUrl: `/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`,
}

export default requests;