import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Layout from './Layout'
import Search from './Search'

class Home extends Component {
  render() {
    return (
      <Layout title={this.props.title} subtitle={this.props.subtitle}>
        <section className="section">
          <Search handleModuleSearch={this.props.handleModuleSearch} handleModuleChange={this.props.handleModuleChange} />
          <br />
          <Dropzone 
            accept="application/json"
            onDrop={this.props.handleDrop}>
            <p>Try dropping a package.json here or click to upload</p>
          </Dropzone>
        </section>
      </Layout>
    )
  }
}

export default Home
