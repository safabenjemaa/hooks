import React, { useState } from "react";
import "./App.css";
import { MovieData } from "./Components/MovieData";
import Main from "./Components/Main";
import Header from "./Components/Header/Header"

function App() {
  const [movies, setMovies] = useState(MovieData);
  const [search, setSearch] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div className="App">
      <Header
        setSearch={setSearch}
        searchRate={searchRate}
        setSearchRate={setSearchRate}
      />
      <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rating >= searchRate
        )}
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;