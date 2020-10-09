import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {toCamelCase} from "../../utils/common";
import {filmShape} from "../../utils/props-validation";

class AddReviewScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: 3,
      reviewText: ``
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const value = evt.target.value;
    const name = toCamelCase(evt.target.name);
    this.setState({[name]: value});
  }

  render() {
    const {film} = this.props;
    const {title, poster, background, id} = film;
    const filmScreenLink = `/films/${id}`;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={background} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link className="logo__link" to="/">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link className="breadcrumbs__link" to={filmScreenLink}>{title}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit = {this.handleSubmit}>
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange = {this.handleFieldChange}/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange = {this.handleFieldChange} />
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked onChange = {this.handleFieldChange} />
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange = {this.handleFieldChange} />
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange = {this.handleFieldChange} />
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange = {this.handleFieldChange}></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>
              </div>

              {/* test */}
              <pre>{JSON.stringify(this.state, undefined, 2)}</pre>

            </form>
          </div>

        </section>
      </React.Fragment>
    );
  }
}

AddReviewScreen.propTypes = {
  film: filmShape.isRequired,
};

export default AddReviewScreen;
