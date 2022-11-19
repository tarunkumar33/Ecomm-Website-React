import HeaderCartButton from './HeaderCartButton';
import classes from './navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {  
    return (
      <nav className={classes.nav}>
        <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/Store">Store</NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/About">About</NavLink>
            </li>
            <HeaderCartButton onClick={props.onShowCart}/>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;