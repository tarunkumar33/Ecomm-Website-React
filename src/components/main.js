import ProductItem from "./ProductItem";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Main = () => {
    const productsList = productsArr.map((product) => (
        <div style={{flex:'50%'}}>
            <ProductItem
          key={Math.random()}
          id={Math.random()}
          {...product}
        />
        </div>
        
      ));
    
      return (
        <section style={{backgroundColor:'white',width:'700px',margin:'0px auto'}}>
            <ul style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>{productsList}</ul>
        </section>
      );
};

export default Main;
