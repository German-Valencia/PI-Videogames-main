import React from "react";
import { Link } from "react-router-dom";
import imgnav from "../../img/imgnav.png";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <Link to="/about">
            <img src={imgnav} alt="img not found" className={styles.img} />
          </Link>
        </div>
        <div>
          <Link to="/create">
            <button className={styles.btn}>Create Videogame</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
