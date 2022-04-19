import React from 'react'
import Prototype from 'prop-types'
export const Header = (props) => {
    let { title, searchBar } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    {searchBar ? <form className="d-flex"  >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : 'No SearchBar'}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Navbar Title",
    searchBar: true,

}

Header.prototype = {//------ its a interfaceset variable datatypes
    title: Prototype.string,
    searchBar:Prototype.bool.isRequired,
}