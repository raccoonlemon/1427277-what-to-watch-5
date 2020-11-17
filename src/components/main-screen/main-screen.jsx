import React from "react";
import {connect} from "react-redux";
import {selectPromoFilm} from "../../store/selectors";
import {filmShape} from "../../utils/props-validation";
import AddToListButton from "../add-to-list-button/add-to-list-button";
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from "../footer/footer";
import Header from "../header/header";
import PlayButton from "../play-button/play-button";

export const MainScreen = ({film}) => {
  const {title, genre, year, poster, background, id, isFavorite} = film;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head" isLinkActive = {false}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton id = {id}></PlayButton>
                <AddToListButton id = {id} isFavorite = {isFavorite}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmCatalog/>
        <Footer isLinkActive = {false}/>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  film: filmShape.isRequired,
};

const mapStateToProps = (state) => ({
  film: selectPromoFilm(state)
});

export default connect(mapStateToProps)(MainScreen);
