import React from "react";



import { Link } from "react-router-dom";

function Header(){
return(
<>

    <nav className="navbar navbar-expand-lg navbar-dark  bg-blue">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/ReactSalazarService">Salazar Services</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ReactSalazarService"  >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="ReactSalazarService/contact" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ReactSalazarService/#about" >About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ReactSalazarService/#service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ReactSalazarService/#screenshot">Our Jobs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>

);



}

export default Header;