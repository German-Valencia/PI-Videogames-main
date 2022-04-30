import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../img/404a.jpg";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div>
      <img className={styles.img} src={img404} alt="img not found" />
      <h1 className={styles.h1}>ERROR 404</h1>
      <h2 className={styles.h2}>Not found...</h2>
      <Link to={"/home"}>
        <button className={styles.btn}>Go Home...</button>
      </Link>
    </div>
  );
};

export default Error404;
