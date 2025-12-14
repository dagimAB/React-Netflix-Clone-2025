# Netflix Clone

This is a Netflix UI clone built with React, Vite, and Tailwind CSS. It uses the TMDB API for movie data.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1.  Clone the repository (if not already cloned).
2.  Navigate to the project directory:
    ```bash
    cd React-Netflix-Clone-2025
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1.  Get an API Key from [TMDB](https://www.themoviedb.org/).
2.  Open `src/api/requests.js`.
3.  Replace `YOUR_API_KEY_HERE` with your actual API key.

## Running the Project

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Features

- **Home Page**: Displays a banner and multiple rows of movies.
- **Banner**: Shows a random Netflix Original with title, description, and buttons.
- **Rows**: Horizontal scrolling lists of movies by category.
- **Header**: Fixed navigation bar that changes background on scroll.
- **Responsive Design**: Built with Tailwind CSS for responsiveness.

## Technologies

- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM
