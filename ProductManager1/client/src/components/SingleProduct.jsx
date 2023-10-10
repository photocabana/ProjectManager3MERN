import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleProduct = (props) => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setSingleProduct(res.data.product)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="singleProduct-component">
            <h2>{singleProduct.title}</h2>
            <p>Price: ${singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <button onClick={deleteFilter}>Delete</button>
            <Link to={"/"}>Return Home</Link>
        </div>
    )
}

export default SingleProduct