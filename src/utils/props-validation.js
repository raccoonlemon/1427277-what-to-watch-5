import PropTypes from 'prop-types';

const stringType = PropTypes.string;
const numberType = PropTypes.number;
const dateValue = PropTypes.instanceOf(Date);

export const filmShape = PropTypes.shape({
  id: stringType,
  title: stringType,
  genre: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(stringType)
  ]),
  year: numberType,
  director: stringType,
  duration: numberType,
  description: stringType,
  background: stringType,
  backgroundColor: stringType,
  poster: stringType,
  posterSmall: stringType,
  videoSrc: stringType,
  previewVideo: stringType,
  starring: PropTypes.arrayOf(stringType),
  isFavorite: PropTypes.bool
});

export const reviewShape = PropTypes.shape({
  date: dateValue,
  author: stringType,
  rating: numberType,
  text: stringType,
});

export const userShape = PropTypes.shape({
  id: stringType,
  name: stringType,
  email: stringType,
  avatarScr: stringType,
});

