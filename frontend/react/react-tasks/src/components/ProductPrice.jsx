import React, { useState } from 'react'

const ProductPrice = () => {
    const[quantity, setQuantity] = useState(0)
    const ProductName= "Laptop"
    const Price=50000
    const totalAmount = quantity * Price

    const handleDecreament = ()=>{
        if(quantity >0){
            setQuantity(pr => pr-1)
        }
    }
  return (
    <>
    <div className="container">
    <h2>Product Laptop</h2>
    <h2> Price ₹5000</h2>
    <button className='btn btn-success me-2'
    onClick={handleDecreament}
    >-</button>
    {quantity}
    <button className='btn btn-success ms-2'
    onClick={()=>setQuantity(prev=>prev+1)}
    >+</button>
    <p>Total Price : {totalAmount}</p>
    </div>
    </>
  )
}

export default ProductPrice