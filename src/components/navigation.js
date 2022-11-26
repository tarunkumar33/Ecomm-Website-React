import HeaderCartButton from "./HeaderCartButton";
import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/Store">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/Contact">
            Contact
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink activeClassName={classes.active} to="/Login">
              Login
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
        <HeaderCartButton onClick={props.onShowCart} />
      </ul>
    </nav>
  );
};

export default Navigation;
