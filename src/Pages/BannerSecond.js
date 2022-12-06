import React from 'react'
import img from '../images/girl.svg'
import './BannerSecond.css'

function BannerSecond() {
  return (
    <div>
        <div className="custom-container h-10">
            <div className="row d-flex w-100">
                <div className="col-md-6">
                    <div className="container mt-xl-5">
                        <div className='demo'>
                            <h1 className='display-5 fw-bold text-light'>Get the 10x advantage in your digital transformation journey</h1>
                            <p className='fw-bold text-light'>Transform 10x faster at 1/10th the cost</p>
                        </div>    
                    </div>
                </div>
                <div className="col-md-6 d-none d-lg-block d-xl-block">
                    <img className="d-block float-right" src={img} alt={''} height='400px'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerSecond