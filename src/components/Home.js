import React, { Component } from 'react'
import Layout from './Layout'
import Search from './Search'

class Home extends Component {
  render() {
    return (
      <Layout title={this.props.title} subtitle={this.props.subtitle}>
        <Search handleModuleSearch={this.props.handleModuleSearch} handleModuleChange={this.props.handleModuleChange} />
      </Layout>
    )
  }
}

export default Home
