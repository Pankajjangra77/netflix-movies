import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MovieItem from './subcomponent/MovieItem';
import axios from '../axios';
import { baseUrl } from '../request';
import './Row.css';

function Row({
  title, moviesUrl, id, allGenres,
}) {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  useEffect(async () => {
    const fetchMovies = async () => {
      const { data: { results } } = await axios.get(moviesUrl);

      return results.map(({
        id, poster_path, genre_ids, title, name, overview, first_air_date, release_date,vote_average,
      }) => ({
        id,
        imageUrl: baseUrl + poster_path,
        genreIds: genre_ids,
        name: title || name,
        overview,
        releaseDate: first_air_date || release_date,
        rating: vote_average,
      }));
    };

    try {
      const data = await fetchMovies();
      setMovies(data);
      const flattedGenresArr = data.map(({ genreIds }) => (genreIds)).flat();
      const uniqGenres = new Set(flattedGenresArr);
      setGenres([...uniqGenres]);
    } catch {
      return null;
    }
  }, []);

  return (
    <div className="row">
      <section id={id}>
            <h2>{title}</h2>
        <div className="row__posters">
          {movies?.map(({
            id, imageUrl, name, overview, releaseDate, genreIds,rating
          }) => (
            <div key={id}>
              <MovieItem
                id={id}
                name={name}
                imgUrl={imageUrl}
                desc={overview}
                releaseDate={releaseDate}
                genres={genreIds}
                overview={overview}
                rating={rating}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  moviesUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rating:PropTypes.number,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Row;
