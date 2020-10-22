import React from "react";
import PropTypes from 'prop-types';
import { FilmInfoTabs } from "../film-screen/film-screen";

export const Tabs = (props) => {
  const { activeTab, onChangeTab } = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmInfoTabs).map((tab)=>{
            const classNames = [`movie-nav__item`];
            if (tab === activeTab) {
              classNames.push(`movie-nav__item--active`);
            }
            return (
              <li key = {tab} className={classNames.join(` `)}>
                <a 
                  href='#' 
                  className="movie-nav__link" 
                  data-tab = {tab} 
                  onClick = {(event) => {
                    event.preventDefault();
                    onChangeTab(tab)
                  }}
                >
                  {tab}
                </a>
              </li>);
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
}

Tabs.propTypes = {};
