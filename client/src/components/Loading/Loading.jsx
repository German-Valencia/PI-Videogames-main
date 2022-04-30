import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.div}>
      <b>Loading...</b>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Loading;
