export const SHORT_LIST_STARRING_COUNT = 4;
export const MAX_STARS_IN_REVIEW = 5;
export const DEFAULT_RAITING_IN_REVIEW = 3;

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

