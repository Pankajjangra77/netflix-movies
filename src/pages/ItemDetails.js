import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './ItemDetails.css';
import axios from '../axios';
import { baseUrl } from '../request';
import StarIcon from '@material-ui/icons/Star';

export const ItemDetails = ({ movie, allGenres }) => {

  const [cast, setCast] = useState([]);

  const history = useHistory();
  if (!movie || !Object.keys(movie).length) {
    history.goBack();
  }
  const {
    id, name, imgUrl, overview, releaseDate, rating, genres,
  } = movie;

  const genresArr = genres?.map(id => (
    allGenres?.find(gen => gen.id === id)
  )).filter(item => item);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movie.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
      const castItems = response.data.cast;
      setCast(castItems.slice(0, 5));
      return response;
    }
    fetchData();
  }, [])

  return (
    <div className="item-page">

      <div className="item__container">
        <div className="item__outer">
          <div className="item__inner">
            <div className="item__img-box">
              <img src={imgUrl} alt="poster" className="item__poster-img" />
            </div>
            <div className="item__text-box">
              <h1 className="item__title">{name}</h1>
              <p className="item__overview">{overview}</p>
              <div className="item__info">
                <span className="item__release-date"><h3>Release Date:</h3>{releaseDate}</span>
              <div className="item__rating-content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/IMDb_logo.svg" alt="imdb" className="item__imdb-img" />
                <span className="item__rating">{rating}</span>
                <StarIcon style={{"font-size": "18px" , "color": "yellow"}} />
              </div>
              </div>
              <h2 className="item__cast-title">Popular Cast</h2>
              <div className="cast__container">
                {
                  cast.map(cast => {
                    return (<div
                      key={cast.id}
                      className="cast__item"
                    >
                      <img className="cast__image" src={baseUrl+cast.profile_path} alt={cast.name} />
                        <p className="cast__name">
                        {cast.name}</p>
                    </div>
                    )
                  })
                }
              </div>
              <div className="gernes"><h3>Gernres:</h3>
                {genresArr?.map(({ name, id }) => <span key={id} className="item__gernes">{name}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  movie: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ movie, genres }) => ({
  movie,
  allGenres: genres,
});

export default connect(mapStateToProps)(ItemDetails);
