import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './StoreLocator.css'

const StoreLocator = () => {
  return (
    <>
    <h1>StoreLocator</h1>

        <div className="container">
            <div className="row">
                <div className="col">
                        <h3>Sujal Icecream Parlor</h3>
                        <address>
                            Shop 420; <br />
                            Sujal's Mall <br />
                            Pimpri Chichwad 
                                <br />
                            411010
                        </address>
                        <p>
                            <MdEmail /> ceo@sujalicecream.com
                        </p>
                        <p>
                            <FaPhoneAlt /> 8989898978
                        </p>
                </div>
                <div className="col">
                    <iframe className='mapStore' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6239862289635!2d73.75057237525438!3d18.590983367019493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb5315379ab%3A0x7745e38574812a65!2sWisdom%20Sprouts%20IT%20Training%20Hub%20%7C%20Java%2C%20Python%2C%20MERN%20Full%20Stack%20IT%20Courses!5e0!3m2!1sen!2sin!4v1781517764451!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    
    </>
  )
}

export default StoreLocator