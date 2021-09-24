import React from "react";
import { useState } from "react";
import "./styles.css";

const movieList = {
  romantic: [
    {
      name: "After Life",
      description: "This is romantic movie 1",
      rating: "Rating : ⭐⭐⭐"
    },

    {
      name: "Just Go With It",
      description: "This is romantic movie 2",
      rating: "Rating : ⭐⭐⭐⭐"
    }
  ],

  adventure: [
    {
      name: "Stranger Things",
      description: "This is Adventures movie 1 ",
      rating: "Rating : ⭐⭐⭐⭐"
    },
    {
      name: "Cobra Kai",
      description: "This is Adventures movie 2",
      rating: "Rating : ⭐⭐⭐"
    }
  ],
  comedy: [
    {
      name: "Mismatched",
      description: "This is comedy movie 1",
      rating: "Rating : ⭐⭐⭐"
    },
    {
      name: "Candy Jar",
      description: "This is comedy movie 2",
      rating: "Rating : ⭐⭐⭐⭐"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Best Movies </h1>
      <h3>I have created a list of great movies for you have a look</h3>

      <div>
        {Object.keys(movieList).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <br />
      <ul className="list">
        {movieList[selectedGenre].map((movie) => (
          <li key={movie.description}>
            <h3> {movie.name} </h3>
            <h4> {movie.description} </h4>
            <h4 style={{ paddingBottom: "2rem" }}> {movie.rating} </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
