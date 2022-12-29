import React from "react";


import { Link as ScrollLink } from "react-scroll";


function Header(){
  
return(
<>


    <nav className="navbar navbar-expand-lg navbar-dark  bg-blue">
  <div className="container-fluid">
    <ScrollLink className="navbar-brand" to="carouselExampleCaptions">Salazar Services</ScrollLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <ScrollLink className="nav-link" aria-current="page" to="carouselExampleCaptions" spy={true} smooth={true} offset={-10} duration={1000} >Home</ScrollLink>

        </li>
        <li className="nav-item">
          <ScrollLink className="nav-link"  spy={true} smooth={true} offset={25} duration={1000} to="contact" >Contact</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink className="nav-link" to="about" spy={true} smooth={true} offset={10} duration={1000}>About us</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink className="nav-link" to="service" activeClass="active"  spy={true} smooth={true} offset={-10} duration={1000} >Services</ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink className="nav-link" to="Ourjobs" activeClass="active"  spy={true} smooth={true} offset={-35} duration={1000} >Our Jobs</ScrollLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>

);



}

export default Header;