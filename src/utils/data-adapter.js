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
    videoSrc: data.video_link,
    previewVideo: data.preview_video_link,
    isFavorite: data.is_favorite
  };
  return film;
};

export const adaptReviewToClient = (data)=>{
  const review = {
    id: data.id.toString(),
    date: new Date(data.date),
    author: data.user.name,
    rating: data.rating,
    text: data.comment
  };
  return review;
};

export const adaptUserToClient = (data)=>{
  const review = {
    id: data.id.toString(),
    date: new Date(data.date),
    email: data.email,
    name: data.name,
    avatarSrc: data.avatar_url,
  };
  return review;
};

