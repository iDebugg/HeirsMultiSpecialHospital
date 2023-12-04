import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';

function Ourservices() {
    return (
        <div>
            <Header />
            
            <div className="Ourservices-lists" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <p className="Ourservices-Paragraph" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">We offer our clients a very world class services;</p>
                <ul className="contactInfoOpt">
                    <li data-aos="fade-up" data-aos-duration="3000">Treatment of Kidney Disease</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Professional Counselling Services</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Laboratory Services with Blood Bank Facilities</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Cancer Treatment (Prostate, Breast, Intestinal)</li>
                    <li data-aos="fade-up" data-aos-duration="3000"> Heart and Cardiovascular Disease Treatment</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Computerised Tomography Scan (CT Scan)</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Radiology (Digital X-ray and Ultrasound)</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Cardiopulmonary Lab</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Obstetric and Gyneacological Services</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Dialysis Service with Peritoneal Option</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Intensive and Critical Care Services</li>
                    <li data-aos="fade-up" data-aos-duration="3000">Trauma and Addiction Recovery Therapy</li>
                    <li data-aos="fade-up"
     data-aos-duration="3000">Orthopeadic Surgery </li>
                    <li data-aos="fade-up"
     data-aos-duration="3000">General and Specialised Surgery</li>

                </ul>
            </div>
            <Footer />
        </div>
    )
}
export default Ourservices;