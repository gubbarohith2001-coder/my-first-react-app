import React, { useEffect, useState } from "react";
import Search from "./components/search.jsx";
import Spinner from "./components/spinner.jsx";

const API_BASE_URL = "http://localhost:3000/movies";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch Movies");
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.error || "failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll Enjoy
            without Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p key={movie.id} className="text-red-500">
                {errorMessage}
              </p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <li key={movie.id} className="text-white">
                    {movie.title}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </header>

        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
