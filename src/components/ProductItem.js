import React, { useContext } from 'react'
import CartContext from '../store/cart-context';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
const ProductItem = (props) => {
  console.log('props:', props);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      quantity: 1,
      price: props.price,
    });
  };
  let {title,imageUrl,price}=props;
  return (
    <li className={classes.product}>
        <h1>{title}</h1>
        <img src={imageUrl}></img>
        <div className={classes.footer}>
        <div>${price}</div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
    </li>
  )
}

export default ProductItem