import PropTypes from 'prop-types';
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Path} from '../../const';
import {filmShape, reviewShape} from '../../utils/props-validation';
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
        <Route exact path={Path.MAIN_PAGE}>
          <MainScreen
            promoFilm = {props.promoFilm}/>
        </Route>
        <Route exact path={Path.SIGN_IN}>
          <SignInScreen/>
        </Route>
        <Route exact path={Path.MY_LIST}>
          <MyListScreen films = {props.films}/>
        </Route>
        <Route exact path={Path.ADD_REVIEW}
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            const film = props.films.find((element)=>element.id === id);
            return (
              <AddReviewScreen film = {film}/>);
          }}>
        </Route>
        <Route exact path={Path.FILM_SCREEN}
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            return (
              <FilmScreen id = {id}/>);
          }}>
        </Route>
        <Route exact path={Path.PLAYER}>
          <PlayerScreen/>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>404.</h1>
              <p>Page not found</p>
              <Link to={Path.MAIN_PAGE}>Go to main page</Link>
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
