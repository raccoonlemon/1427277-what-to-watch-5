export const SHORT_LIST_STARRING_COUNT = 4;

export const FilmRating = {
  AWESOME: `Awesome`,
  VERY_GOOD: `Very good`,
  NORMAL: `Normal`,
  BAD: `Bad`,
  NOT_RATED: `Not rated`,
};

export const FILM_RATING_SCALE = [
  {rating: FilmRating.AWESOME, minScore: 10},
  {rating: FilmRating.VERY_GOOD, minScore: 8},
  {rating: FilmRating.NORMAL, minScore: 5},
  {rating: FilmRating.BAD, minScore: 0}
];

