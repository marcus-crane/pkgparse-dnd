import React from 'react'

const Search = (props) => {
  return (
    <section className="section">
      <form onSubmit={props.handleModuleSearch}>
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Search for a module"
              onChange={props.handleModuleChange}
              value={props.query}
            />
          </p>
          <p className="control">
            <button className="button is-success" type="submit">
              Search
            </button>
          </p>
        </div>
      </form>
    </section>
  )
}

export default Search