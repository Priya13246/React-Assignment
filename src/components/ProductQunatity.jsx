import React, {useState} from 'react'

const ProductQunatity = () => { 

    const [qunatity, SetQunatity] = useState(1)
    const product = "Laptop"
    const Price = 50000
    const totalAmt = Price * qunatity
    return (
        <>
            <h2>Product Qunatity</h2>
            <div className="container">
                <p>Product : {product}</p>
                <p>Product : {Price}</p>
                <button onClick={() => SetQunatity(qunatity - 1)}>-</button>
                {qunatity}
                <button  onClick={() => SetQunatity(qunatity + 1)}>+</button>
                <p>Total Amount : {totalAmt}</p>

            </div>
        </>
    )
}

export default ProductQunatity