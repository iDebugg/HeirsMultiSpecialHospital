import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Header from './Header';



function Footer() {
    
    return (
        <>
        <div className="Footer">
            <div className="container text-center">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h4 className='footerheader'>Heirs Multi Specialist Hospital</h4>
                    <h5 className='contactInfoOpt'>Saving lives is our priority.</h5>
                    <div className='footer-icons'>
                        <i class="fa-brands fa-square-facebook fa-xl"></i>
                       <i class="fa-brands fa-square-instagram fa-xl"></i>
                       <i class="fa-brands fa-square-twitter fa-xl"></i>

                    </div>
                    
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">        
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h4 className='footerheader'>Contact Info</h4>
                    <span className='contactInfoOpt'>
                    <h5><i class="fa-solid fa-phone"></i> +23407067637065</h5>
                    <h5><i class="fa-solid fa-phone"></i> +23409165910965</h5>
                    <h5><i class="fa-solid fa-inbox"></i> heirspecialistmd@gmail.com</h5>
                     
                    </span>
                   
                </div>
                

            </div>
            </div>
        </div>
        <div className='last-footer'>
        <p >Design by Idebugg</p>
        </div>
        </>
        
    )
}

export default Footer;