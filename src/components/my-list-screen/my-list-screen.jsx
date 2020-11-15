import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {selectFavoriteFilms} from '../../store/selectors';
import {filmShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import Footer from '../footer/footer';
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

      <Footer/>
    </div>);
};

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmShape).isRequired
};

const mapStateToProps = (state) => ({
  films: selectFavoriteFilms(state),
});

export default connect(mapStateToProps)(MyListScreen);
