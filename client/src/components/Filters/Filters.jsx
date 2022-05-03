import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  filterCreated,
  orderName,
  filterGenre,
  filterRating,
} from "../../actions";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Filters.module.css";

const Filters = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  };

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  const handleFilterGenre = (e) => {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterRating = (e) => {
    e.preventDefault();
    dispatch(filterRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };

  return (
    <div className={styles.div}>
      <div>
        <SearchBar />
      </div>
      <div>
        <h4 className={styles.h4}>Filters</h4>
        <label className={styles.label}>Created - Api</label>
        <select
          className={styles.select}
          onChange={(e) => {
            handleFilterCreated(e);
          }}
        >
          <option value="all">ALL</option>
          <option value="api">API</option>
          <option value="created">CREATED</option>
        </select>

        <label className={styles.label}>Genres</label>
        <select
          className={styles.select}
          onChange={(e) => {
            handleFilterGenre(e);
          }}
        >
          <option value="all">ALL</option>
          {allGenres?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <h4 className={styles.h4}>Order</h4>

        <select
          onChange={(e) => {
            handleFilterRating(e);
          }}
          className={styles.select}
        >
          <option className={styles.order}>Rating</option>

          <option value="asc">ASC</option>

          <option value="desc">DESC</option>
        </select>

        <select
          onChange={(e) => {
            handleOrderName(e);
          }}
          className={styles.select}
        >
          <option className={styles.order}>Alphabetically</option>

          <option value="asc">A-Z</option>

          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
