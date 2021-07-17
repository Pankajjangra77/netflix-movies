
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './subcomponent/MovieItem';
import axios from '../axios';
import { baseUrl } from '../request';
import filterAction from '../redux/actions/filter';
import './Row.css';

function Row({
  title, moviesUrl,filterParam , moviesFilter, id, allGenres,
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

  const setMoviesToDisplay = () => {
    return movies;
  };

  const allMovies = filterParam.toString() === '0' ? movies : setMoviesToDisplay();
  return (
    <div className="row">
      <section id={id}>
            <h2>{title}</h2>
        <div className="row__posters">
          {allMovies?.map(({
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
  filterParam: PropTypes.number.isRequired,
  moviesFilter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  rating:PropTypes.number,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  filterParam: state.filter,
});

const mapDispatchToProps = dispatch => ({
  moviesFilter: param => dispatch(filterAction(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Row);
