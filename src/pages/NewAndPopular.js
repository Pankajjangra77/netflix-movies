import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from '../components/Row';
import requests from '../request';
import axios from '../axios';  
import setGenres from '../redux/actions/genres';

const NewAndPopular = ({ genres, setGenres }) => {
  useEffect(async () => {
    const fetchGenres = async () => {
      const { data: genres } = await axios.get(requests.fetchGenresUrl);
      return genres.genres;
    };
    const res = await fetchGenres();
    setGenres(res);
  }, []);
  return (
    <div>
      <Row allGenres={genres} id="upcomingMovies" title="UPCOMING MOVIES" moviesUrl={requests.fetchUpcomingMovies} />
      <Row allGenres={genres} id="PopularMovies" title="POPULAR MOVIES" moviesUrl={requests.fetchMoviePopular} />
      <Row allGenres={genres} id="popularTv" title="POPULAR TV SHOWS" moviesUrl={requests.fetchPopularTVShows} />
    </div>
  );
};

NewAndPopular.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setGenres: PropTypes.func.isRequired,
};

const mapStateToProps = ({ genres }) => ({
  genres,
});

const mapDispatchToProps = dispatch => ({
  setGenres: genres => dispatch(setGenres(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAndPopular);
