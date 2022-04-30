import React from "react";
import { NavLink } from "react-router-dom";
import noImage from "../../img/noImage.png";
import styles from "./Card.module.css";

export default function Card({ name, image, genres, id }) {
  return (
    <div>
      <NavLink className={styles.none} to={`/videogames/${id}`}>
        <div>
          <img
            className={styles.img}
            src={image ? image : noImage}
            alt="img not found"
            width="200px"
            height="250vh"
          />
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
          <h4>Genres:</h4>
          <div className={styles.genres}>
            {genres?.map((e, k) => {
              return (
                <div className={styles.genres} key={k}>
                  <p className={styles.text}>
                    {e.charAt(0).toUpperCase() + e.slice(1) + ","}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </NavLink>
    </div>
  );
}
