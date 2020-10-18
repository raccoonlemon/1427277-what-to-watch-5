import {FilmRating, FILM_RATING_SCALE} from "../const";

export const getSimilarFilms = (films, {genre, id}) =>{
  return films.filter((film)=>film.genre === genre && film.id !== id);
};

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
