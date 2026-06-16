import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function IcecreamDetail({products}) {
    const [icecream,setIcecream] = useState()
    const {ID} = useParams()
    
    function fetchData(){
       const icecream1 = products.find((v,i)=> v.id == ID)
       setIcecream(icecream1)
    }


    useEffect(()=>{
        fetchData()
    },[ID])

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="row g-0">
          
          <div className="col-md-6">
            <img
              src={icecream?.image}
              alt={icecream?.name}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", minHeight: "400px" }}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body p-5">
              <span className="badge bg-warning text-dark mb-3">
                Ice Cream
              </span>

              <h1 className="fw-bold mb-3">{icecream?.name}</h1>

              <p className="text-muted fs-5">
                A smooth and delicious vanilla ice cream made with rich creamy flavor.
              </p>

              <h5 className="mt-4">Ingredients</h5>
              <p className="fs-5">{icecream?.ingreat}</p>

              <h2 className="text-success fw-bold mt-4">
                ₹{icecream?.price}
              </h2>

              <div className="mt-4">
                <button className="btn btn-primary btn-lg me-3">
                  Add to Cart
                </button>
                <button className="btn btn-outline-secondary btn-lg">
                  Buy Now
                </button>
              </div>

              <div className="mt-4 text-warning fs-4">
                ★★★★★
              </div>

              <p className="text-muted mt-2">
                Fresh, creamy and perfect for dessert lovers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default IcecreamDetail;