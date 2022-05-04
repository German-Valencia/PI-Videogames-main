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
  const id = props.match.params.id;
  const detail = myVideogame.filter((e) => e !== null);
  let detailOk = detail.filter((e) => e.id.toString() === id.toString());
  console.log(detail);
  return (
    <div>
      {detailOk.map((e, k) => (
        <div key={k}>
          {e ? (
            <div className={styles.container}>
              <div className={styles.card}>
                <h2 className={styles.h2}> {e.name} </h2>
                <p className={styles.p}><b>Id:</b> #{e.id}</p>
                <img
                  src={e.img ? e.img : noImage}
                  alt="img not found"
                  height="250px"
                  width="400px"
                />
                <p>Genres:</p>

                <div className={styles.types}>
                  <h3>
                    {!e.createdInDb ? (
                      <div className={styles.genres}>
                        {e.genres?.map((e, k) => {
                          return (
                            <div className={styles.genres} key={k}>
                              <p className={styles.text}>{e},</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className={styles.genres}>
                        {e.genres?.map((e, k) => {
                          return (
                            <div className={styles.genres} key={k}>
                              <p className={styles.text}> {e.name}, </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </h3>
                </div>

                <p>Platfomrs:</p>
                
                <div className={styles.types}>
                  <h3>
                    <div className={styles.types}>
                      <h3>
                        {!e.createdInDb ? (
                          <div className={styles.platforms}>
                            {e.platforms?.map((e, k) => {
                              return (
                                <div className={styles.genres} key={k}>
                                  <p className={styles.text}>{e},</p>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className={styles.genres}>
                            {e.platforms?.map((e, k) => {
                              return (
                                <div className={styles.genres} key={k}>
                                  <p className={styles.text}> {e.name}, </p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </h3>
                    </div>
                  </h3>
                </div>
                <h5 className={styles.h5}>Released: {e.released}</h5>
                <h5 className={styles.h5}>Rating: {e.rating}</h5>
                <h5 className={styles.h5}>Description: {e.description}</h5>
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
      ))}
    </div>
  );
};

export default Detail;
