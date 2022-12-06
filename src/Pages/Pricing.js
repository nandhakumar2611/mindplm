import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div>
        <h3 className='text-center fw-bold fs-1  mt-5 mb-5'>Simple and affordable pricing</h3>
        <div className="row w-100">
                <div className="col-sm-3">
                    <div className='card m-4'>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 fw-bold fs-3 text-muted">Basic</h6><hr></hr>
                            <h5 class="card-title fs-1 fw-bold"><span className='custom-font'>₹</span>100</h5>
                            <p class="card-text">/month billed annually</p>
                            <p class="card-text">90 billed monthly</p>
                            <button className="btn btn-light fw-bold started-btn" type="button">Start Now</button>
                        </div>            
                    </div>
                </div>
                <div className="col-sm-3 ">
                <div className='card m-4'>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 fw-bold fs-3 text-muted">Standard</h6><hr></hr>
                            <h5 class="card-title fs-1 fw-bold "><span className='custom-font'>₹</span>200</h5>
                            <p class="card-text">/month billed annually</p>
                            <p class="card-text">180 billed monthly</p>
                            <button className="btn btn-light fw-bold started-btn" type="button">Start Now</button>
                        </div>            
                    </div>
                </div>
                <div className="col-sm-3 ">
                <div className='card m-4'>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 fw-bold fs-3 text-muted">Premium</h6><hr></hr>
                            <h5 class="card-title fs-1 fw-bold"><span className='custom-font'>₹</span>300</h5>
                            <p class="card-text">/month billed annually</p>
                            <p class="card-text">280 billed monthly</p>
                            <button className="btn btn-light fw-bold started-btn" type="button">Start Now</button>
                        </div>            
                    </div>
                </div>
                <div className="col-sm-3 ">
                <div className='card m-4'>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 fw-bold fs-3 text-muted">Elite</h6><hr></hr>
                            <h5 class="card-title fs-1 fw-bold"><span className='custom-font'>₹</span>400</h5>
                            <p class="card-text">/month billed annually</p>
                            <p class="card-text">390 billed monthly</p>
                            <button className="btn btn-light fw-bold started-btn" type="button">Start Now</button>
                        </div>            
                    </div>
                </div>
            </div>    
    </div>
  )
}

export default Pricing