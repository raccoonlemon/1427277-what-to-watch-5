export const adaptFilmToClient = (data)=>{
  const film = {
    id: data.id.toString(),
    title: data.name,
    genre: data.genre.toLowerCase(),
    year: data.released,
    director: data.director,
    duration: data.run_time,
    starring: data.starring,
    description: data.description,
    background: data.background_image,
    backgroundColor: data.background_color,
    poster: data.poster_image,
    posterSmall: data.preview_image,
    video: data.video_link,
    previewVideo: data.preview_video_link,
    isFavorite: data.is_favorite
  };
  return film;
};
