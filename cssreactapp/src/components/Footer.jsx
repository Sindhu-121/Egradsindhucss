import React from 'react';
import "./style/Footer.css"
import Pluralsight from './images/Pluralsight-Logo-Mark-Color-Fill.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='Support1'>
                <div>
                    <h2>Support</h2>
                    <ul>
                        <li className='Support1li'>Contact</li>
                        <li>Help Center</li>
                        <li>IP Allowlist</li>
                        <li>Site Map</li>
                        <li>Download Pluralsight</li>
                        <li>Skills Plans</li>
                        <li>A Cloud Guru Plans</li>
                        <li>Flow Plans</li>
                        <li>Professional Services</li>
                    </ul></div>
                <div>
                    <h2>Community</h2>
                    <ul>
                        <li>Guides</li>
                        <li>Teachr</li>
                        <li>Partner with Pluralsight</li>
                        <li>Affiliate Partners</li>
                        <li>Pluralsight One</li>
                        <li>Authors</li>
                    </ul>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div>
                    <h2>Industries</h2>
                    <ul>
                        <li>Education</li>
                        <li>Financial Services (FSBI)</li>
                        <li>Healthcare</li>
                        <li>Insurance</li>
                        <li>Non-Profit</li>
                        <li>Public Sector</li>
                    </ul>
                </div>
                <div>
                <h2>Newsletter</h2>
                <p>Sign up with your email to join our mailing list.</p>
                <h6>Email Address:</h6>
                <div className='Email'></div>
                <p><div></div>I would like to receive emails from Pluralsight</p>
                <div className='Submit11'>Submit</div>
                <div className='brands1'>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-youtube"></i>

                 
                </div>
            </div>
            </div>
            <hr></hr>
                    <div className='Copyright11'>
                        <div className='Copyright12'>
                        <img src={Pluralsight}/>
                        <h4>Copyright © 2004 - 2024 Pluralsight LLC. All rights reserved</h4>
                        </div>
                        
                        <div>Terms of Use    Privacy Notice      Modern Slavery Statement</div>
                    </div>

        </div>
    )
}
export default Footer