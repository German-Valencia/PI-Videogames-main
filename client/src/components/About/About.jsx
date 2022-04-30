import React from "react";
import styles from "./About.module.css";
import gav from "../../img/gavt.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Germán A. Valencia T.</div>
      <div className={styles.description}>
        <div>
          <img className={styles.picture} src={gav} alt="img not found"></img>
        </div>
        <p>
          Analytical with great decision-making capacity, professional with
          comprehensive training, combining technological and scientific
          training with the humanistic part, guaranteeing a high level of
          performance, with business management capacity, excellent
          interpersonal relationships, flexibility to change and teamwork.
        </p>
      </div>
      <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
    </div>
  );
}

export default About;
