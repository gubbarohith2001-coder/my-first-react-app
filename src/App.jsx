import React, { useEffect, useState } from "react";
import Search from "./components/search.jsx";

const API_BASE_URL = "http://localhost:3000/";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async => {
    try {
      
    } catch (error) {
      
    }
  }

  useEffect(() => {}, []);
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
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
