import React from "react";
import PropTypes from 'prop-types';
import {FilmInfoTabs} from "../../const";
import {useHistory} from "react-router-dom";

const Tabs = (props) => {
  const {activeTab, onTabChange} = props;
  const history = useHistory();
  return (<nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(FilmInfoTabs).map((tab)=>{
        const classNames = [`movie-nav__item`];
        if (tab === activeTab) {
          classNames.push(`movie-nav__item--active`);
        }
        return (
          <li key = {tab} className={classNames.join(` `)}>
            <a href="#" className="movie-nav__link" data-tab = {tab}
              onClick = {(evt)=>{
                evt.preventDefault();
                history.push(`#${tab}`);
                onTabChange();
              }}>{tab}</a>
          </li>);
      })}
    </ul>
  </nav>);
};

Tabs.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tabs;
