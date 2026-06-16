import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({prod}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
             <Link to={`/details/${prod.id}`} className='nav-link'>
            <img src={prod.image} class="card-img-top custom_img" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <p>Price : &#x20B9; {prod.price}</p>
                <a href="#" className="btn btn-primary me-1">Add to cart</a>
                <button className='btn btn-warning'>BUY NOW</button>
            </div>
        </div>
    )
}

export default Card