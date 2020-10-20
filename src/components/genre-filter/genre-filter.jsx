import React from "react";
import {capitalizeFirstLetter} from "../../utils/common";
import PropTypes from 'prop-types';

const GenreFilter = (props) => {
  const {onFilterChage, activeFilter, genres} = props;
  return (<ul className="catalog__genres-list">
    {genres.map((genre)=>{
      const classList = [`catalog__genres-item`];
      if (genre === activeFilter) {
        classList.push(`catalog__genres-item--active`);
      }
      classList.push(activeFilter);
      return (<li className={classList.join(` `)} key = {genre}>
        <a href="#" className="catalog__genres-link" data-genre = {genre}
          onClick ={(evt) => {
            evt.preventDefault();
            onFilterChage(evt.target.dataset.genre);
          }}>{capitalizeFirstLetter(genre)}</a>
      </li>);
    })}
  </ul>);
};

GenreFilter.propTypes = {
  onFilterChage: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenreFilter;
