import {FilmRating, FILM_RATING_SCALE} from "../const";
import {ALL_GENRES_FILTER} from "../const";

export const getSimilarFilms = (films, {genre, id}) => films.filter((film)=>film.genre === genre && film.id !== id);

export const getAverageRating = (reviews)=>{
  const rewiewsCount = reviews.length;

  if (!reviews || !reviews.length) {
    return 0;
  }

  const totalRating = reviews.reduce((result, review)=>{
    return result + review.rating;
  }, 0);
  const averageRating = Math.round(totalRating / rewiewsCount * 10) / 10;

  return averageRating;
};


export const getRatingDescription = (reviews) =>{

  if (!reviews || !reviews.length) {
    return FilmRating.NOT_RATED;
  }
  const averageRating = getAverageRating(reviews);

  for (const filmRating of FILM_RATING_SCALE) {
    if (averageRating >= filmRating.minScore) {
      return filmRating.rating;
    }
  }

  return FilmRating.NOT_RATED;
};

export const getGenresList = (films)=>{
  const MAX_GENRES_COUNT = 9;

  const genres = films.map((film)=>film.genre.toLowerCase());

  let uniqueGenres = [...new Set(genres)];

  uniqueGenres.sort();
  uniqueGenres = uniqueGenres.slice(0, MAX_GENRES_COUNT);
  uniqueGenres.unshift(ALL_GENRES_FILTER.toLowerCase());

  return uniqueGenres;
};
