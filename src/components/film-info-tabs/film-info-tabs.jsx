import React from "react";
import PropTypes from 'prop-types';
import {FilmInfoTab} from "../../const";
import {useHistory} from "react-router-dom";

const FilmInfoTabs = (props) => {
  const {activeTab, onTabChange} = props;
  const history = useHistory();
  return (<nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(FilmInfoTab).map((tab)=>{
        const classNames = [`movie-nav__item`];
        if (tab === activeTab) {
          classNames.push(`movie-nav__item--active`);
        }
        return (
          <li key = {tab} className={classNames.join(` `)}>
            <a href="#" className="movie-nav__link" data-tab = {tab}
              onClick = {(evt)=>{
                evt.preventDefault();
                if (tab === activeTab) {
                  return;
                }
                history.push(`#${tab}`);
                onTabChange();
              }}>{tab}</a>
          </li>);
      })}
    </ul>
  </nav>);
};

FilmInfoTabs.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string,
};

export default FilmInfoTabs;
