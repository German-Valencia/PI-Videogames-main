import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanVideogames, getVideogames } from "../../actions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);

  //Paginado acá abajo
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15); // eslint-disable-line no-unused-vars
  const [order, setOrder] = useState(""); // eslint-disable-line no-unused-vars
  //Para modificar el estado local y me ayude al renderizado
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cleanVideogames(dispatch));
    dispatch(getVideogames());
  };

  return (
    <div>
      {allVideogames.length > 0 ? (
        <div>
          <Nav />
          <div className={styles.home}>
            <div className={styles.filters}>
              <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
              <button
                className={styles.btn}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Clear filters
              </button>
            </div>

            <div>
              <div>
                <Pagination
                  videogamesPerPage={videogamesPerPage}
                  allVideogames={allVideogames.length}
                  pagination={pagination}
                />
              </div>
              <div className={styles.cards}>
                {currentVideogames?.map((e, k) => {
                  return (
                    <div key={e.id} className={styles.card}>
                      <Card                        
                        id={e.id}
                        name={e.name}
                        image={e.img}
                        genres={e.genres}
                        createdInDb={e.createdInDb}
                        rating={e.rating}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
