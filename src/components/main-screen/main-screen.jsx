import React from "react";
import {connect} from "react-redux";
import {selectPromoFilm} from "../../store/selectors";
import {filmShape} from "../../utils/props-validation";
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from "../footer/footer";
import Header from "../header/header";
import FilmCard from "../film-card/film-card";

export const MainScreen = ({film}) => {
  const {title, background} = film;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head" isLinkActive = {false}/>
        <FilmCard film={film}/>
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
