import React, { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";

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
      const response = await fetch(API_BASE_URL, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovieList(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Search functionality
  const filteredMovies = movieList.filter((movie) =>
    movie.title?.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

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
              <p className="text-red-500">{errorMessage}</p>
            ) : filteredMovies.length > 0 ? (
              <ul>
                {filteredMovies.map((movie) => (
                  <li key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">
                {searchTerm.trim()
                  ? `No movies found for "${searchTerm}".`
                  : "No movies available."}
              </p>
            )}
          </section>
        </header>
      </div>
    </main>
  );
};

export default App;
