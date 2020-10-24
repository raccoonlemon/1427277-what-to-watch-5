import PropTypes from 'prop-types';
import React from "react";
import {Link} from 'react-router-dom';
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import Header from '../header/header';

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

      <footer className="page-footer">
        <div className="logo">
          <Link className="logo__link logo__link--light" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>);
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

export default MyListScreen;
