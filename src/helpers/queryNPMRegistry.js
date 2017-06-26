import axios from 'axios'

const queryNPMRegistry = async (module) => {
  try {
    let response = await axios(`http://cors.io/?https://registry.npmjs.org/${module.toLowerCase()}`)
    return response.data
  } catch (err) {
    throw err
  }
}

export default queryNPMRegistry