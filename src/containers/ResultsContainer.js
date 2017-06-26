import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from '../components/Loading'
import Results from '../components/Results'
import queryNPMRegistry from '../helpers/queryNPMRegistry'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, module: '' }
  }

  async componentDidMount() {
    try {
      let response = await queryNPMRegistry(this.context.router.route.match.url.slice(1))
      let latest = response['dist-tags'].latest
      let current = response.versions[latest]
      console.log(response)
      this.setState({
        loading: false,
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

  render() {
    return this.state.loading === true
      ? <Loading />
      : <Results
          module={this.state.module}
          title={this.state.module.name}
          subtitle={this.state.module.description}
        />
  }
}

ResultsContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ResultsContainer