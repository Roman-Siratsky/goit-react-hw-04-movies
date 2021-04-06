import axios from "axios"

const apiKey = 'c8971b346877ee4bba0d277ad44911fe'

const movieRequest = async (path, params = '') => {
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3${path}?api_key=${apiKey}${params}`)
        return data
    } catch(error) {
        console.log(error.message);
    }
}
export default movieRequest;