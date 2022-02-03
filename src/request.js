const APIKEY = 'fe81a7590ed309e5d50f9bb6b4ccfc00';
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/movie?api_key=${APIKEY}&language=en-US`,

}

export default function request (){



}