import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = { api_key: 'c8971b346877ee4bba0d277ad44911fe'}

export const fetchTrending = async () => {
    try {
        const { data } = await axios.get(`/trending/movie/day`)
        return data.results
    } catch(error) {
        console.log(error.message);
    }
}

export const searchMovies = async (query = '', page = 1) => {
    try {
        const { data } = await axios.get(`/search/movie`, {
            params: {query, page},
        })
        return data.results
    } catch(error) {
        console.log(error.message);
    }
}


export const fetchCast = async (filmId) => {
    try {
        const { data } = await axios.get(`/movie/${filmId}/credits`)
        return data.cast
    } catch(error) {
        console.log(error.message);
    }
}

export const fetchReviews = async (filmId) => {
    try {
        const { data } = await axios.get(`/movie/${filmId}/reviews`)
        return data.results
    } catch(error) {
        console.log(error.message);
    }
}
export const fetchDetails = async (filmId) => {
    try {
        const { data } = await axios.get(`/movie/${filmId}&append_to_response=images`)
        return data
    } catch(error) {
        console.log(error.message);
    }
}