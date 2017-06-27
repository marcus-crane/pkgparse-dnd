import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { files: [], module: '', query: '' }
  }

  handleDrop = (files) => {
    if (files) {
      fetch(files[0].preview)
      .then(resp => resp.json())
      .then(file => {
        this.context.router.history.push({
          pathname: `/${file.name}`,
          state: {
            module: {
              dependencies: [...Object.keys(file.dependencies)],
              description: file.description,
              license: file.license,
              name: file.name
            }
          }
        })
      })
      .catch(err => console.log('heck', err))
    }
  }

  handleModuleSearch = async (e) => {
    this.context.router.history.push({
      pathname: this.state.query
    })
  }

  handleModuleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    return (
      <Home
        handleDrop={this.handleDrop}
        handleModuleSearch={this.handleModuleSearch}
        handleModuleChange={this.handleModuleChange}
        title="pkgparse"
        subtitle="Search for a module"
      />
    )
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default HomeContainer