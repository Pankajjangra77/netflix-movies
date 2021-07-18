import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from '../components/Row';
import requests from '../request';
import axios from '../axios';  
import setGenres from '../redux/actions/genres';

const Home = ({ genres, setGenres }) => {
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
      <Row allGenres={genres} id="comedyMovies" title="COMEDY MOVIES" moviesUrl={requests.fetchComedyMovies} />
      <Row allGenres={genres} id="horrorMovies" title="HORROR MOVIES" moviesUrl={requests.fetchHorrorMovies} />
      <Row allGenres={genres} id="romanticMovies" title="ROMANTIC MOVIES" moviesUrl={requests.fetchRomanceMovies} />
      <Row allGenres={genres} id="actionMovies" title="ACTION MOVIES" moviesUrl={requests.fetchActionMovies} />
      <Row allGenres={genres} id="thrillerMovies" title="THRILLER MOVIES" moviesUrl={requests.fetchIndianMovies} />
    </div>
  );
};

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
