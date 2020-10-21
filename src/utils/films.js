import {ALL_GENRES_FILTER} from "../const";

export const getFilmsByGenre = ({films, currentGenre}) =>{
  if (currentGenre === ALL_GENRES_FILTER) {
    return films.slice();
  }

  return films.filter((film)=>film.genre === currentGenre);
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
