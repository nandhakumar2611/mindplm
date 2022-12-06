import React from 'react'
import './Banner.css'
import img from '../images/jobcardtask.svg'



function Banner() {
  return (
    <div>
        <div className='custom-container h-25'>
          <div className='pt-5'>
          <h1 className='text-center text-light display-1 fw-bold pt-5'>We Automated Your task</h1>
          <p className='text-center text-light fs-2'>Still using alternative often incorporate human or other <br></br>content that actually detracts is to showcase real content.</p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-light fw-bold algin-center custom-btn fs-5" type="button">Get Started</button>
        </div>  
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
          fill="#0c24c9" 
          fillOpacity="1" 
          d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,133.3C672,128,768,160,864,186.7C960,213,1056,235,1152,224C1248,
          213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,
          0,96,0,48,0L0,0Z">
          </path>
        </svg>
        <img className="img-fluid mx-auto d-block" src={img} alt={''}></img>
    </div>
  )
}

export default Banner