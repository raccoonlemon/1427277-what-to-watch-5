import PropTypes from 'prop-types';

const stringValueRequired = PropTypes.string.isRequired;
const numberValueRequired = PropTypes.number.isRequired;
const dateValueRequired = PropTypes.instanceOf(Date).isRequired;

export const filmShape = PropTypes.shape({
  id: stringValueRequired,
  title: stringValueRequired,
  genre: stringValueRequired,
  year: numberValueRequired,
  director: stringValueRequired,
  duration: numberValueRequired,
  description: stringValueRequired,
  background: stringValueRequired,
  poster: stringValueRequired,
  posterSmall: stringValueRequired,
  video: stringValueRequired,
  previewVideo: stringValueRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const reviewShape = PropTypes.shape({
  date: dateValueRequired,
  author: stringValueRequired,
  rating: numberValueRequired,
  text: stringValueRequired,
});
