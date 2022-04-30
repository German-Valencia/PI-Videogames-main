import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName, cleanVideogames } from "../../actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(cleanVideogames(dispatch));
    dispatch(getVideogameByName(name));
    setName("");
  };

  return (
    <div className={styles.search}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Videogame name..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={name}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
