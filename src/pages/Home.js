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
      <Row allGenres={genres} id="popularMovies" title="POPULAR MOVIES" moviesUrl={requests.fetchMoviePopular} />
      <Row allGenres={genres} id="topRatedMovies" title="TOP RATED MOVIES" moviesUrl={requests.fetchTopRated} />
      {/* <Row allGenres={genres} id="trendingMovies" title="TRENDING MOVIES" moviesUrl={requests.fetchTrending} />
      <Row allGenres={genres} id="topRatedTv" title="TOP RATED SHOWS" moviesUrl={requests.fetchTopRatedTv} />
      <Row allGenres={genres} id="documentries" title="Documentries" moviesUrl={requests.fetchDocumentries} /> */}
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
