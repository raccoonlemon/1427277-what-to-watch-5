import PropTypes from 'prop-types';
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {filmShape, reviewShape} from '../../utils/props-validation';
import {Random} from '../../utils/random';
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MainScreen from "../main-screen/main-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";

const App = (props) =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            promoFilm = {props.promoFilm}
            films = {props.films}/>
        </Route>
        <Route exact path="/login">
          <SignInScreen/>
        </Route>
        <Route exact path="/mylist" >
          <MyListScreen films = {props.films}/>
        </Route>
        <Route exact path="/films/:id/review"
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            const film = props.films.find((element)=>element.id === id);
            return (
              <AddReviewScreen
                film = {film}>
              </AddReviewScreen>);
          }}>
        </Route>
        <Route exact path="/films/:id"
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            const film = props.films.find((element)=>element.id === id);
            const reviews = props.reviews.filter((review)=>review.filmId === id);
            // temp mock
            const similarFilms = Random.getArrayElements(props.films, 4);
            return (
              <FilmScreen
                film = {film}
                reviews = {reviews}
                similarFilms = {similarFilms}>
              </FilmScreen>);
          }}>
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen/>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>404.</h1>
              <p>Page not found</p>
              <Link to="/">Go to main page</Link>
            </React.Fragment>)}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: filmShape.isRequired,
  films: PropTypes.arrayOf(filmShape).isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired
};

export default App;
