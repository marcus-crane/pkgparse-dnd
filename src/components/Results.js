import React, { Component } from 'react'
import Layout from './Layout'

class Results extends Component {
  render() {
    return (
      <Layout title={this.props.title} subtitle={this.props.subtitle || 'No description available.'}>
        <section className="section">
          {this.props.module.dependencies.map((entry, index) => <li key={index}>{entry}</li>)}
          <br/>
          <a className="button is-warning" href="/">Back</a>
        </section>
      </Layout>
    )
  }
}

export default Results
