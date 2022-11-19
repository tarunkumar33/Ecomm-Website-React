import HeaderCartButton from './HeaderCartButton';
import classes from './navigation.module.css';

const Navigation = (props) => {  
    return (
      <nav className={classes.nav}>
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <HeaderCartButton onClick={props.onShowCart}/>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;