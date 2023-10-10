import React, {useState} from 'react'
import CreateProduct from "../components/CreateProduct"
import DisplayAllProducts from "../components/DisplayAllProducts"

const Main = (props) => {
    const [productItems, setProductItems] = useState([])
    return (
      <div>
          <CreateProduct productItems={productItems} setProductItems={setProductItems}/>
          <DisplayAllProducts productItems={productItems} setProductItems={setProductItems}/>
      </div>
    )
}

export default Main