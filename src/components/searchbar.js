import React from 'react'
import PropTypes from 'prop-types'

const Searchbar = ({searchString, updateURL}) => (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="form-group justify-content-center row col-10 my-2">
            <input
                value={searchString}
                // TODO: onChange deve atualizar a URL 
                onChange={updateURL}
                className="form-control col-9 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
    </nav>
)

Searchbar.propTypes = {
    searchString: PropTypes.string
}

export default Searchbar;
