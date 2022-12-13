
import axios from "axios";

const imageSearch = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zVP3ADMd8nH-ef3STq7hFQko974YhCnGlD7EB17qp_g'
        },
        params: {
            query: 'cars'
        }
    })
    console.log(response);
    return response
}
export default imageSearch