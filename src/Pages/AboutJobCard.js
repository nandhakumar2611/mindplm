import React from 'react'
import ima1 from '../images/global.png'
import ima2 from '../images/time.png'
import ima3 from '../images/paper.png'
import './AboutJobcard.css'


function AboutJobCard() {
  return (
    <div className='w-100'>
        <h3 className='text-center fw-bold fs-1  mt-5 mb-5'>Why Job card is the preferred tracking software of businesses</h3>
            <div className="row w-100">
                <div className="col ">
                    <div className="card m-5">
                    <img className="card-img-top" src={ima1} alt={''}/>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">All in One</h5>
                            <p className="card-text fs-5">
                            Assigning jobs, scheduling, quality inspection etc. is also an integral part of Digital Job card app. 
                            Based on the scheduling, daily work will be automatically allocated.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card m-5">
                    <img className="card-img-top" src={ima2} alt={''}></img>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">No more paper based monitoring</h5>
                            <p className="card-text fs-5">Complete digital solution to assign jobs to all the operators in the machine shop. 
                            This app can easily be integrated with the attendance system and based on daily attendance the jobs can be 
                            allocated to particular operator/machine.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col ">
                    <div className="card m-5">
                    <img className="card-img-top" src={ima3} alt={''}></img>
                        <div className="card-body">
                            <h5 className="card-title text-center fw-bold">Real time communicating</h5>
                            <p className="card-text fs-5">Display real time work sheets, next job in queue, quality alerts to operators 
                            during the operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
    
  )
}

export default AboutJobCard