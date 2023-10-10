import React, { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const DisplayAll = (props) => {

    const { productItems, setProductItems } = props
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data)
                setProductItems(res.data.products)
            })
            .catch((err) => console.log(err))
    }, [])

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data)

                setProductItems(productItems.filter((product, index) => product._id !== idFromBelow))
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <header>All Products: </header>
            {productItems.map((product, index) => (
                <div key={product._id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <br />
                    <Link to={`/product/edit/${product._id}`}>Edit</Link>
                    <br/>
                    <button onClick={() => deleteFilter(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll
