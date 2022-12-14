import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zVP3ADMd8nH-ef3STq7hFQko974YhCnGlD7EB17qp_g'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}

export default searchImages