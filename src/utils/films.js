export const getSimilarFilms = (films, {genre, id}) =>{
  return films.filter((film)=>film.genre === genre && film.id !== id);
};
