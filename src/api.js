import axios from 'axios'

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            // access key for authorization
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        },
        // string that goes into the url
        params: {
            query: 'cars'
        }
    })
    return response.data.results
}

export default searchImages;