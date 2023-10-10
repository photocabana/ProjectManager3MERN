import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const UpdateProduct = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
            })
            .catch((err) => 
                console.log(err))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()

        axios.patch(`http://localhost:8000/api/products/${id}`, { title, price, description })

            .then((res) => {
                console.log(res)
                console.log(res.data)
                navigate("/")
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input onChange={(e) => setTitle(e.target.value)}
                        value={title} name="title" type="text" />
                </div>
                <br />
                <div className="form-fields">
                    <label>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)}
                        value={price} name="price" type="number" />
                </div>
                <br />
                <div className="form-fields">
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)}
                        value={description} name="description" type="text" />
                </div>
                <br />
                <input className="submit-input" type="submit" value="Update" />
            </form>

            <Link to={"/"}>Return Home</Link>
        </div>
    )
}

export default UpdateProduct