import PropTypes from 'prop-types';

const stringValueRequired = PropTypes.string.isRequired;
const numberValueRequired = PropTypes.number.isRequired;
const dateValueRequired = PropTypes.instanceOf(Date).isRequired;

export const filmShape = PropTypes.shape({
  id: stringValueRequired,
  title: stringValueRequired,
  genre: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  year: numberValueRequired,
  director: stringValueRequired,
  duration: numberValueRequired,
  description: stringValueRequired,
  background: stringValueRequired,
  backgroundColor: stringValueRequired,
  poster: stringValueRequired,
  posterSmall: stringValueRequired,
  videoSrc: stringValueRequired,
  previewVideo: stringValueRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired
});

export const reviewShape = PropTypes.shape({
  date: dateValueRequired,
  author: stringValueRequired,
  rating: numberValueRequired,
  text: stringValueRequired,
});
