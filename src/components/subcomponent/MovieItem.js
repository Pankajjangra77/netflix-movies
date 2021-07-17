import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setMovie from '../../redux/actions/movie'; 
import './MovieItem.css'
import StarIcon from '@material-ui/icons/Star';


export const MovieItem = ({
  imgUrl, name, setMovie, id, overview, releaseDate,rating, genres,
}) => {
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    setMovie({
      id, imgUrl, name, overview, releaseDate,rating, genres,
    });
    history.push(`/details/${id}`);
  };

  return (
    <div className="row__post__container">
          <img  className="row__poster" src={imgUrl} alt="Movie Poster" onClick={handleClick} />
          <p className="movie__item-rating">
          <StarIcon style={{"font-size": "17px" , "color": "orange"}}/>
          {rating}
          </p>
    </div>
  );
};

MovieItem.defaultProps = {
  imgUrl: '',
};

MovieItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  setMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapDispatchToProps = dispatch => ({
  setMovie: obj => dispatch(setMovie(obj)),
});
export default connect(null, mapDispatchToProps)(MovieItem);
