/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img src="./images/logo.png" alt="Logo" loading="lazy" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 p-3">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" to="/">home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-bold" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-bold" to="/sale">sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-bold" to="/news">news</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-bold" to="/shop">shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fw-bold" to="/contact">contact</Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <Link className="t me-3" to="/shop">
                                <i className="fas fa-shopping-cart text-light"></i>
                            </Link>
                            <Link className="me-3" to="/search">
                                <i className="fa-solid fa-magnifying-glass text-light"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar