import PropTypes from 'prop-types';
import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
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
            movieInfo = {props.movieInfo}
            films = {props.films}/>
        </Route>
        <Route exact path="/login">
          <SignInScreen/>
        </Route>
        <Route exact path="/mylist">
          <MyListScreen/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen/>
        </Route>
        <Route exact path="/films/:id" component={FilmScreen}>
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
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.array.isRequired
};

export default App;
