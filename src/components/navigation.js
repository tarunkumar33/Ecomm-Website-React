import HeaderCartButton from './HeaderCartButton';
import classes from './navigation.module.css';

const Navigation = () => {  
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
            <HeaderCartButton/>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;