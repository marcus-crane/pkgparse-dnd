import React from 'react'
import Layout from './Layout'

const Results = (props) => {
  return (
    <Layout title={props.module.name} subtitle={props.module.description || 'No description available.'}>
      <section className="section">
        {props.module.dependencies.map((entry, index) => <li key={index}>{entry}</li>)}
        <br/>
        <a className="button is-danger" href="/">Back</a>
      </section>
    </Layout>
  )
}

export default Results
