import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/get" >List post</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/post" >Create post</Link>
                </li>
            </ul>
        </nav>


    )
}