import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Receipes = () => {
    const [receipes, setReceipes] = useState([])

    async function fetchData() {
        const res = await axios.get('https://dummyjson.com/recipes?limit=10')
        console.log(res.data.recipes)
        setReceipes(res.data.recipes)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>Receipes</div>
            <div className="container">
                <div className="row">
                    {
                        receipes.map((rec, i) => (
                            <div className="col-12" key={i}>
                                <div class="card mb-3">
                                    <img src={rec.image} class="card-img-top" alt="..."
                                        style={{ width: "40%", height: "200px" }}
                                    />
                                    <div class="card-body">

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 class="card-title">{rec.name}</h5>
                                                    <h2>Ingredients</h2>
                                                    {
                                                        rec.ingredients.map((ing, index) => (
                                                            <li key={index}>{ing}</li>
                                                        ))
                                                    }
                                                </div>
                                                <div className="col-6">
                                                    <h2>instructions</h2>
                                                    <ol>
                                                    {
                                                        rec.instructions.map((ins,index)=>(
                                                                <li>{ins}</li>
                                                        ))
                                                    }
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Receipes