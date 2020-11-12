import React from "react";
import {Link, Route, Router, Switch} from "react-router-dom";
import {Path} from '../../const';
import browserHistory from "../../utils/browser-history";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import FilmScreen from "../film-screen/film-screen";
import MainScreen from "../main-screen/main-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import SignInScreen from "../sign-in-screen/sign-in-screen";

const App = () =>{
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={Path.MAIN_PAGE}>
          <MainScreen/>
        </Route>
        <Route exact path={Path.SIGN_IN}>
          <SignInScreen/>
        </Route>
        <PrivateRoute exact path={Path.MY_LIST} render = {()=><MyListScreen/>}/>
        <PrivateRoute exact path={Path.ADD_REVIEW}
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            return (
              <AddReviewScreen id = {id}/>);
          }}/>
        <Route exact path={Path.FILM_SCREEN}
          render={(routerProps)=>{
            const id = routerProps.match.params.id;
            return (
              <FilmScreen id = {id}/>);
          }}/>
        <Route exact path={Path.PLAYER}>
          <PlayerScreen/>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>404.</h1>
              <p>Page not found</p>
              <Link to={Path.MAIN_PAGE}>Go to main page</Link>
            </React.Fragment>)}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
