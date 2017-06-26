import React, { Component } from 'react'
import Home from '../components/Home'
import Results from '../components/Results'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { module: '', query: '' }
  }

  handleModuleSearch = (e) => {
    fetch(`http://cors.io/?https://registry.npmjs.org/${this.state.query.toLowerCase()}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let latest = json['dist-tags'].latest
      let current = json.versions[latest]
      this.setState({
        module: {
          dependencies: [...Object.keys(current.dependencies)],
          description: current.description,
          license: current.license,
          name: current.name,
        }
      })
      console.log(current.dependencies)
    })
    .catch(err => console.log('failed', err))
    e.preventDefault()
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