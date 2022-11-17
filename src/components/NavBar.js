import React from 'react';

export function NavBar(props) {

  return (
    <nav className="nav-bar navbar navbar-expand-md navbar-expand-lg">
         <div className="fluid-container text-white">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                    <li className="nav-item px-3"><a href="./index.html">Homepage</a></li>
                    <li className="nav-item px-3"><a href="./major.html">Major</a></li>
                    <li className="nav-item px-3"><a href="./post.html">Posts</a></li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <a href="#"><i className="fa fa-bars m-4 d-md-none" aria-label="menu"></i></a>
            </div>
        </div>
    </nav>
  )
}