import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer class="text-center text-lg-start footer-bg text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block text-light">
                    <span>Get connected with us on social networks:</span>
                </div> 
                <div>
                    <a href="./facebook" class="me-4 text-light"><i class="fab fa-facebook-f"></i></a>
                    <a href="./twitter" class="me-4 text-light"><i class="fab fa-twitter"></i></a>
                    <a href="./google" class="me-4 text-light"><i class="fab fa-google"></i></a>
                    <a href="./instagram" class="me-4 text-light"><i class="fab fa-instagram"></i></a>
                    <a href="./linkedin" class="me-4 text-light"><i class="fab fa-linkedin"></i></a>
                    <a href="./github" class="me-4 text-light"><i class="fab fa-github"></i></a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">    
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4 text-light">MINDPLM</h6>
                            <p className='text-light'>MindPLM is a leading provider of Product Lifecycle Management (PLM) and 
                            Industrial Digital transformation solutions across all industry verticals</p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase text-light fw-bold mb-4">Products</h6>
                            <p><a href="./MindJobCard" class="text-light">Mind Job Card</a></p>
                            <p><a href="./Teamcenter" class="text-light">Teamcenter</a></p>
                            <p><a href="./Nx" class="text-light">NX </a></p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase text-light fw-bold mb-4">Useful links</h6>
                            <p><a href="./Pricing" class="text-light">Pricing</a></p>
                            <p><a href="./Settings" class="text-light">Settings</a></p>
                            <p><a href="./Orders" class="text-light">Orders</a></p>
                            <p><a href="./Help" class="text-light">Help</a></p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase text-light fw-bold mb-4">Contact</h6>
                            <p className='text-light'><i class="fas fa-home me-3"></i> Manavala Nagar, Thiruvallur, TN</p>
                            <p className='text-light'><i class="fas fa-envelope me-3"></i>info@mindplm.com</p>
                            <p className='text-light'><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p className='text-light'><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div> 
                </div>
            </section>
  
            <div class="text-center text-light p-4">
                © 2021 Copyright:
                <a class="text-light fw-bold" href="https://mindplm.com/">www.mindplm.com</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer