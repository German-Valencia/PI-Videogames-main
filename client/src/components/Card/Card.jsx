import React from "react";
import { NavLink } from "react-router-dom";
import noImage from "../../img/noImage.png";
import styles from "./Card.module.css";

export default function Card({ name, image, genres, id, createdInDb, rating }) {
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
          <h3>{name}</h3>
          <h3 className={styles.margin}>Rating:</h3>
          <div className={styles.text}>{rating}</div> 
          <h3 className={styles.margin}> Genres:</h3>
          {!createdInDb ? (
            <div className={styles.genres}>
              {genres?.map((e, k) => {
                return (
                  <div className={styles.genres} key={`${k}g`}>
                    <p className={styles.text}>{e},</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.genres}>
              {genres?.map((e, k) => {
                return (
                  <div className={styles.genres} key={`${k}g1`}>
                    <p className={styles.text}> {e.name}, </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
}
