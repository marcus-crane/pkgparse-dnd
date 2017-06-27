import axios from 'axios'

const queryNPMRegistry = async (module) => {
  try {
    let response = await axios(`http://pkgparse.thingsima.de/api/${module.toLowerCase()}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export default queryNPMRegistry