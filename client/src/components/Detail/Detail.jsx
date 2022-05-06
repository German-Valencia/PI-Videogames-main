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

  return (
    <div>
      {detailOk?.map((e, k) => (
        <div key={k}>
          {e ? (
            <div className={styles.container}>
              <div className={styles.card}>
                <h2 className={styles.h2}> {e.name} </h2>
                <p className={styles.p}>
                  <b>Id:</b> #{e.id}
                </p>
                <img
                  className={styles.img}
                  src={e.img ? e.img : noImage}
                  alt="img not found"
                />

                <div className={styles.col1}>
                  <div className={styles.col2}>
                    <div className={styles.titles}>Genres:</div>
                    <div>
                      {!e.createdInDb ? (
                        <div>
                          {e.genres?.map((e, k) => {
                            return (
                              <div className={styles.genres1} key={k}>
                                <div className={styles.text}>{e},</div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className={styles.genres1}>
                          {e.genres?.map((e, k) => {
                            return (
                              <div className={styles.genres1} key={k}>
                                <div className={styles.text}> {e.name}, </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className={styles.titles}>Rating:</div>
                    <div className={styles.h5}>{e.rating}</div>
                  </div>

                  <div className={styles.col2}>
                    <div className={styles.titles}>Platforms:</div>
                    <div>
                      <div>
                        <div className={styles.types}>
                          <div>
                            {!e.createdInDb ? (
                              <div>
                                {e.platforms?.map((e, k) => {
                                  return (
                                    <div className={styles.genres1} key={k}>
                                      <div className={styles.text}>{e},</div>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className={styles.genres1}>
                                {e.platforms?.map((e, k) => {
                                  return (
                                    <div className={styles.genres1} key={k}>
                                      <div className={styles.text}>
                                        {" "}
                                        {e.name},{" "}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.titles}>Released: </div>
                    <div className={styles.h5}>{e.released}</div>
                  </div>
                </div>
                <div className={styles.text}><b>Description:</b></div>
                <div className={styles.description}>
                  <div className={styles.h5}> {e.description}</div>
                </div>
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
