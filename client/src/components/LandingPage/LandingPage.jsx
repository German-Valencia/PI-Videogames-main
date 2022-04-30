import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import videogamesimg from "../../img/7Gu1.gif";

export default function LandingPage() {
  return (
    <div className={styles.bg}>
      <img src={videogamesimg} alt="img not found" className={styles.img}/>
      <h3 className={styles.author}>Videogames by Gav</h3>
      <Link to="/home">
        <button className={styles.buttonIng}>Start</button>
      </Link>
    </div>
  );
}
