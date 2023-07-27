import axios from 'axios'

require('dotenv').config()

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            // access key for authorization
            Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        },
        // string that goes into the url
        params: {
            query: 'cars'
        }
    })
    console.log(response)
    return response.data.results
    // return response.data.results
}

export default searchImages;