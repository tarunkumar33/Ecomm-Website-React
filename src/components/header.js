import { Fragment } from "react";
import classes from "./header.module.css";
import Navigation from "./navigation";

const Header = () => {
  return (
    <>
    <Navigation/>
      <header className={classes.header}>Mobiles Store</header>
    </>
  );
};

export default Header;
