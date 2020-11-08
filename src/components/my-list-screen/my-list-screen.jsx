import PropTypes from 'prop-types';
import React from "react";
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import Footer from '../footer/footer';
import Header from '../header/header';

// TODO: загружать фильмы с сервера, GET /favorite

const MyListScreen = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films = {films}/>
      </section>

      <Footer/>
    </div>);
};

MyListScreen.propTypes = {
  // films: PropTypes.arrayOf(filmShape).isRequired
  // TODO: после того как данные будут загружены с сервера, вернуть isRequired. Пока пропс не передается.
  films: PropTypes.arrayOf(filmShape)
};

export default MyListScreen;
