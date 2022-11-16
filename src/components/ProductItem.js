import React from 'react'
import classes from './ProductItem.module.css';
const ProductItem = (props) => {
  console.log('props:', props);
  let {title,imageUrl,price}=props;
  return (
    <li className={classes.product}>
        <h1>{title}</h1>
        <img src={imageUrl}></img>
        <div className={classes.footer}>
        <div>{price}</div>
        <button>Add to cart</button>
        </div>
    </li>
  )
}

export default ProductItem