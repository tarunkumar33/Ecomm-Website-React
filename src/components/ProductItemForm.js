


const ProductItemForm = (props) => {


  return (

      <button onClick={props.onAddToCart.bind(null,1)}>+ Add</button>

  );
};

export default ProductItemForm;
