import React from "react";
import {connect} from "react-redux";
import {filmShape} from "../../utils/props-validation";
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from "../footer/footer";
import Header from "../header/header";
import FilmCard from "../film-card/film-card";
import {selectPromoFilm} from "../../store/films/films";

export const MainScreen = ({film}) => {
  const {title, background, poster} = film;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head"/>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>
            <FilmCard film={film}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <FilmCatalog/>
        <Footer/>
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
