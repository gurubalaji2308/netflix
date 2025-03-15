import React from "react";
import "./App.css";

const movies = [
  {
    name: "Stranger Things part 1",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjang2tSfHU_olHQ-m_gzuGMDV-h1wMsAsoagx_ho5GW2KksCy&psig=AOvVaw0HEPyNbxWdJUMee7ZygJWB&ust=1741334346496000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMiKnIv-9IsDFQAAAAAdAAAAABAE",
    videoUrl: "https://www.netflix.com/title/80057281",
    },
  {
    name: "Wednesday",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQJOOBsSXu5RmCS5Y_hvl_g6zaznOgE6VD2Teh3dqqfeiTa00Vk&psig=AOvVaw1cpCSxkj5ELJopLB535j_C&ust=1741355668683000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDnvcLN9YsDFQAAAAAdAAAAABAE",
    videoUrl:"https://www.netflix.com/in/title/81231974",
  },
  {
    name: "Stranger Things part 2",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjang2tSfHU_olHQ-m_gzuGMDV-h1wMsAsoagx_ho5GW2KksCy&psig=AOvVaw0HEPyNbxWdJUMee7ZygJWB&ust=1741334346496000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMiKnIv-9IsDFQAAAAAdAAAAABAE",
    videoUrl: "https://www.netflix.com/title/80057281",
 },
];

const App = () => {
  const handleWatchNow = (url) =>{
    window.location.href = url;
  }
  return (
    <div className="netflix-clone">
      <header>
        <h1>Netflix Clone</h1>
        <nav>
          <a href="https://www.netflix.com/in/?utm=syndication">Home</a>
          <a href="https://www.netflix.com/in/browse/genre/34399">Movies</a>
          <a href="https://www.netflix.com/tudum/top10/most-popular/tv" className="active">Series</a>
        </nav>
      </header>

      <main>
        <h2>Popular Shows</h2>
        <div className="movies">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.name} />
              <h3>{movie.name}</h3>
              <button className="watch-button" onClick={() =>handleWatchNow(movie.videoUrl)}>
                Watch Now
                </button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2025 Netflix Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
