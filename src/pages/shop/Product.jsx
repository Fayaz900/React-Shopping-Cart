import React from 'react'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    console.log(productImage)
  return (
    <div className='product'>
    
        <img src={productImage}/>
        <div className="des">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
    </div>
  )
}
