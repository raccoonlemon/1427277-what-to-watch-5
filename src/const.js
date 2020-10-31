export const SHORT_LIST_STARRING_COUNT = 4;
export const MAX_RAITING_IN_REVIEW = 5;
export const DEFAULT_RAITING_IN_REVIEW = 3;

export const MAX_SIMILAR_FILM_COUNT = 4;

// В ТЗ значение этих констатнт должно быть 8,
// но т.к в моках только 8 фильмов, то для тестов пока 2
export const SHOWN_FILMS_INITIAL_COUNT = 2;
export const SHOW_MORE_FILMS_STEP = 2;

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

export const ALL_GENRES_FILTER = `all genres`;

export const FilmInfoTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const Path = {
  MAIN_PAGE: `/`,
  FILM_SCREEN: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  MY_LIST: `/mylist`,
  SIGN_IN: `/login`,
  PLAYER: `/player/:id`,
  filmScreen: (id) => Path.FILM_SCREEN.replace(`:id`, id),
  addReview: (id) => Path.ADD_REVIEW.replace(`:id`, id),
  player: (id) => Path.PLAYER.replace(`:id`, id),
};


