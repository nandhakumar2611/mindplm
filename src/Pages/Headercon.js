import React from 'react'

function Headercon() {
  return (
    
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="./Home">
      
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link fw-bold fs-5 text-dark" href="./Pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold fs-5 text-dark" href="./About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold fs-5 text-dark" href="./Contact">Contact</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search"></input>
          <button class="btn btn-primary" type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>

  )
}

export default Headercon