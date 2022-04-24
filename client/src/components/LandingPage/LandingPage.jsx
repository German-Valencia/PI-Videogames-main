import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import videogamesimg from "../../img/7Gu1.gif";

export default function LandingPage() {
  return (
    <div className={styles.bg}>
      <img src={videogamesimg} alt="img not found" className={styles.img}/>
      <h2 className={styles.author}>By... Gav</h2>
      <Link to="/home">
        <button className={styles.buttonIng}>Start</button>
      </Link>
    </div>
  );
}
