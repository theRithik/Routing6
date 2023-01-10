import React from "react";
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme='dark'>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Advertising Board</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
      <li><Link to='/' class="nav-link active">Home</Link></li>
      <li><Link to='/Post' class="nav-link active">Post</Link></li>
    <li><Link to='/profile' class="nav-link active" >Profile</Link></li>
      </ul>
    </div>
  </div>
</nav>
           <ul>
           
           </ul>
        </div>
    )
}
export default Header;