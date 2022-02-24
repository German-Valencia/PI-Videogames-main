import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../actions/index";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideogames());
  }

  return (
    <div>
      <Link to="/videogame">Crear personaje</Link>
      <h1>VIDEOGAMES</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reset all filters
      </button>
      <div>
        <select name="" id="">
        <option value="all">ALL</option>
          <option value="api">API</option>
          <option value="bd">BD</option>
        </select>

        <select name="" id="">
          plataforma
        </select>

        <select name="" id="">
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <select name="" id="">
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>

        <select name="" id=""></select>
      </div>
    </div>
  );
}
