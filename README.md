# React Movie App

A movie browsing application built with **React** and **Vite**. It loads
movie data from a local **JSON Server** API and displays movies in
cards. Users can search the collection by movie title.

## Features

- Fetches movie data from a local REST API.
- Searches movies by title as you type.
- Displays movie details in reusable movie cards.
- Shows a loading spinner while data is being fetched.
- Handles and displays fetch errors.
- Uses a fallback image when a movie thumbnail is unavailable.

## Tech Stack

- **React** --- UI components and state management
- **Vite** --- development server and build tooling
- **JavaScript (ES6+)**
- **CSS / utility-style classes** --- styling
- **JSON Server** --- local mock REST API

## How It Works

1.  `App.jsx` requests movie data from `http://localhost:3000/movies`.
2.  React state tracks the search term, movie list, loading status, and
    any error message.
3.  The search term filters the fetched movie list by title, without
    needing a new API request for each keystroke.
4.  `Search.jsx` provides the controlled search input.
5.  `MovieCard.jsx` renders each movie's information.
6.  `Spinner.jsx` displays the loading state while the request is in
    progress.
