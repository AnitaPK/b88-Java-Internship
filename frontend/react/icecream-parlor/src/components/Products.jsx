import React from 'react'
import Card  from './Card'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
    return (
        <>
            <h2>Products List</h2>
            <div className="container">
                <div className="row">
                    {
                        products.map((p, i) => (
                            <div className="col" key={i}>
                             
                               <Card prod={p} />
                            
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products