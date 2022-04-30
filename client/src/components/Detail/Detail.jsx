import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail, cleanVideogames } from "../../actions";
import { useEffect } from "react";
import noImage from "../../img/noImage.png";
import Loading from "../Loading/Loading";
import styles from "./Detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => {
      dispatch(cleanDetail(dispatch), cleanVideogames(dispatch));
    };
  }, [dispatch, props.match.params.id]);

  const myVideogame = useSelector((state) => state.videogameDetail);
  /* console.log(myVideogame.name) */
  return (
    <div>
      {myVideogame ? (
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.h2}> {myVideogame.name} </h2>
            <p className={styles.p}>#{myVideogame.id}</p>
            <img
              src={myVideogame.img ? myVideogame.img : noImage}
              alt="img not found"
              height="250px"
              width="400px"
            />
            <p>Genres:</p>
            <div className={styles.types}>
              <h3>
                {myVideogame.genres?.map((e, k) => {
                  return (
                    <div className={styles.types} key={k}>
                      <p className={styles.text}>{e}</p>
                    </div>
                  );
                })}
              </h3>
            </div>
            <p>Platfomrs:</p>
            <div className={styles.types}>
              <h3>
                {myVideogame.platforms?.map((e, k) => {
                  return (
                    <div className={styles.types} key={k}>
                      <p className={styles.text}>{e}</p>
                    </div>
                  );
                })}
              </h3>
            </div>
            <h5 className={styles.h5}>Released: {myVideogame.released}</h5>
            <h5 className={styles.h5}>Rating: {myVideogame.rating}</h5>
            <h5 className={styles.h5}>
              Description: {myVideogame.description}
            </h5>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
      <div>
        <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
