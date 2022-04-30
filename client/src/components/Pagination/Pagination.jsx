import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ videogamesPerPage, allVideogames, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.list}>
        <p className={styles.pn}>
          <b>Pages number:</b>
        </p>
        {pageNumbers?.map((number) => (
          <li className={styles.items} key={number}>
            <button className={styles.a} onClick={() => pagination(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>      
    </nav>
  );
};

export default Pagination;
