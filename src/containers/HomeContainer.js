import React, { Component } from 'react'
import Home from '../components/Home'
import Results from '../components/Results'
import queryNPMRegistry from '../helpers/queryNPMRegistry'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { module: '', query: '' }
  }

  handleModuleSearch = async (e) => {
    e.preventDefault()
    try {
      let response = await queryNPMRegistry(this.state.query)
      let latest = response['dist-tags'].latest
      let current = response.versions[latest]
      this.setState({
        module: {
          dependencies: [...Object.keys(current.dependencies)],
          description: current.description,
          license: current.license,
          name: current.name
        }
      })
    } catch (e) {
      console.log('Woops', e)
      throw e
    }
  }

  handleModuleChange = (e) => {
    this.setState({ query: e.target.value })
    e.preventDefault()
  }

  render() {
    return this.state.module === ''
      ? <Home
          handleModuleSearch={this.handleModuleSearch}
          handleModuleChange={this.handleModuleChange}
          title="Pkgparse"
          subtitle="Search for a module"
        />
      : <Results
          module={this.state.module}
          title={this.state.module.name}
          subtitle={this.state.module.description}
        />
  }
}

export default HomeContainer