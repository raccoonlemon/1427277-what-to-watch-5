import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {FilmInfoTab} from "../../const";
import {filmShape, reviewShape} from "../../utils/props-validation";
import FilmInfoDetails from '../film-info-details/film-info-details';
import FilmInfoOverview from '../film-info-overview/film-info-overview';
import FilmInfoReviews from '../film-info-reviews/film-info-reviews';
import FilmInfoTabs from '../film-info-tabs/film-info-tabs';

const FilmInfo = (props) => {
  const {film, reviews} = props;

  const DEFAULT_TAB = FilmInfoTab.OVERVIEW;

  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.hash.replace(`#`, ``) || DEFAULT_TAB);
  useEffect(() => setActiveTab(location.hash.replace(`#`, ``) || DEFAULT_TAB), [location.hash]);

  return (
    <div className="movie-card__desc">
      <FilmInfoTabs onTabChange = {setActiveTab} activeTab = {activeTab}/>
      {activeTab === FilmInfoTab.OVERVIEW && <FilmInfoOverview film = {film} reviews = {reviews}/>}
      {activeTab === FilmInfoTab.DETAILS && <FilmInfoDetails film = {film} reviews = {reviews}/> }
      {activeTab === FilmInfoTab.REVIEWS && <FilmInfoReviews reviews = {reviews}/>}
    </div>
  );
};

FilmInfo.propTypes = {
  film: filmShape.isRequired,
  reviews: PropTypes.arrayOf(reviewShape).isRequired,
};

export default FilmInfo;
