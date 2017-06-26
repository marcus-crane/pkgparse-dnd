import axios from 'axios'

const queryNPMRegistry = async (module) => {
  try {
    return axios(`https://registry.npmjs.org/${module}`)
  } catch (err) {
    throw err
  }
}

export default queryNPMRegistry