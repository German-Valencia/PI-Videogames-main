import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAllGenres,
  postVideogame,
  cleanVideogames,
  getAllPlatforms,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./VideogameCreate.module.css";

const VideogameCreate = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
    img: "",
  });

  let noEmpty = /\S+/;
  let validateName = /^.{5,200}$/;
  let validateNum = /^\d+$/;
  let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;
  let validateDate = /^\d{4}\/\d{2}\/\d{2}$/;
  let validateWords = /^.{5,200}$/;

  const validate = (input) => {
    let errors = {};
    if (
      !noEmpty.test(input.name) ||
      !validateName.test(input.name) ||
      input.name.length < 5
    ) {
      errors.name = "Name required. more than 5 characters";
    }
    if (!validateNum.test(input.rating) || parseInt(input.rating) < 1) {
      errors.rating = "Number required. Higher than 1";
    }
    if (!validateDate.test(input.released) || parseInt(input.released) < 1) {
      errors.released = "Released required. YYYY/MM/DD";
    }
    if (
      !validateWords.test(input.description) ||
      parseInt(input.description) < 1
    ) {
      errors.description =
        "Description required. Higher than 5 characters and less than 200 ";
    }

    if (!validateUrl.test(input.img)) {
      errors.img = "URL required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    if (input.genres.length < 2) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
      e.target.value = "Select genre";
    } else {
      alert("You cannot choose more than two genres of videogame");
    }
  };

  const handleSelect1 = (e) => {
    if (input.platforms.length < 2) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
      e.target.value = "Select platform";
    } else {
      alert("You cannot choose more than two platforms of videogame");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !errors.name &&
      !errors.rating &&
      !errors.released &&
      !errors.description &&
      /*  !errors.speed &&
      !errors.height &&
      !errors.weight && */
      !errors.img
    ) {
      dispatch(postVideogame(input));
      setInput({
        name: "",
        rating: "",
        released: "",
        description: "",
        /*   speed: "",
        height: "",
        weight: "", */
        genres: [],
        platforms: [],
        img: "",
      });
      dispatch(cleanVideogames(dispatch));
      history.push("/home");
    } else {
      alert("Error. Check the form");
    }
  };

  const handleDelete = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((genre) => genre !== e),
      platforms: input.platforms.filter((platforms) => platforms !== e),
    });
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPlatforms());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Link to="/home">
        <button className={styles.btn}>Go Back</button>
      </Link>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className={styles.h2}>Create Videogame</h2>

        <div className={styles.div}>
          <div className={styles.divito}>
            <label className={styles.label}>Name:</label>
            <input
              className={styles.input}
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Name"
            />
            <p className={styles.p}>{errors.name}</p>
            <label className={styles.label}>Rating:</label>
            <input
              className={styles.input}
              type="number"
              value={input.rating}
              name="rating"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Rating 1-5"
            />
            <p className={styles.p}>{errors.rating}</p>
            <label className={styles.label}>Released:</label>
            <input
              className={styles.input}
              type="text"
              value={input.released}
              name="released"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="YYYY/MM/DD"
            />
            <p className={styles.p}>{errors.released}</p>
          </div>

          <div className={styles.divito}>
            <label className={styles.label}>Image:</label>
            <input
              className={styles.input}
              type="text"
              value={input.img}
              name="img"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="URL Image..."
            />
            <p className={styles.p}>{errors.img}</p>

            <label className={styles.label}>Description:</label>
            <textarea
              className={styles.inputDescription}
              type="text"
              value={input.description}
              name="description"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Description"
            />
            <p className={styles.p}>{errors.description}</p>
          </div>
        </div>
        <div className={styles.element}>
          <select
            className={styles.select}
            onChange={(e) => {
              handleSelect(e);
            }}
          >
            <option>Select Genre</option>
            {genres?.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {input.genres?.map((e) => {
            return (
              <div className={styles.typesSelect} key={e}>
                <p className={styles.pTypes}>{e}</p>
                <button
                  className={styles.btnDelete}
                  onClick={() => {
                    handleDelete(e);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.element}>
          <select
            className={styles.select}
            onChange={(e) => {
              handleSelect1(e);
            }}
          >
            <option>Select Platform</option>
            {platforms?.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
          {input.platforms?.map((e) => {
            return (
              <div className={styles.typesSelect} key={e}>
                <p className={styles.pTypes}>{e}</p>
                <button
                  className={styles.btnDelete}
                  onClick={() => {
                    handleDelete(e);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <button
          className={styles.btnCreate}
          type="submit"
          disabled={!input.name}
        >
          Create!
        </button>
      </form>
    </div>
  );
};

export default VideogameCreate;
