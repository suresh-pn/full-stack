import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <div>

                 <nav className="navbar navbar-expand-lg  navbar-light bg-lighrt">
  <div className="container-fluid">
   
  <Link className='navbar-brand' to="#">

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29e6XafI9sXYsDCYNP_W9FFLi_kquk9eJnA&s" alt="Bootstrap" width="50" ></img>
  
  </Link>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Man">Man</Link>
          </li>
          <li className="nLinkv-item">
          <Link className="nav-link " aria-current="page" to="/Women">Women</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Kids">Kids</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Leaving">Leaving</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Beauty">Beauty</Link>
          </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet />

        </div>
    );
}

export default Navbar;