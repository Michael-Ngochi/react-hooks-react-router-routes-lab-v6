import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const [notFound, setNotFound] = useState(false);
  const { id: movieId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Movie not found");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        setNotFound(false);
      })
      .catch((error) => {
        console.error(error);
        setNotFound(true);
      });
  }, [movieId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {notFound ? (
          <h1>Movie not found</h1>
        ) : (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time} minutes</p>
            <div>
              {movie.genres && movie.genres.map((genre, index) => (
                <span key={index}>{genre} </span>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Movie;
