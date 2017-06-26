import React from 'react'
import Dropzone from 'react-dropzone'
import Layout from './Layout'
import Search from './Search'

const Home = (props) => {
  return (
    <Layout title={props.title} subtitle={props.subtitle}>
      <section className="section">
        <Search handleModuleSearch={props.handleModuleSearch} handleModuleChange={props.handleModuleChange} />
        <br />
        <Dropzone 
          accept="application/json"
          onDrop={props.handleDrop}>
          <p>Try dropping a package.json here or click to upload</p>
        </Dropzone>
      </section>
    </Layout>
  )
}

export default Home
