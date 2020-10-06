import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import FilmSmallCard from "../film-small-card/film-small-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemId: null
    };
  }

  render() {
    const films = this.props.films;
    const filmsList = films.map((it)=>(
      <FilmSmallCard
        key = {it.id}
        onMouseEnter = {(id)=>{
          this.setState({activeItemId: id});
        }}
        onMouseLeave = {()=>{
          this.setState({activeItemId: null});
        }}
        film = {it}/>));
    return (
      <div className="catalog__movies-list">
        {filmsList}
      </div>);
  }
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
