import axios from 'axios'

export const getPokes = async (url) => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${url}`
    })

    return result.data
  } catch(e) {
    return e.response
  }
}