import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {DEFAULT_RAITING_IN_REVIEW, MAX_STARS_IN_REVIEW} from "../../const";
import {filmShape} from "../../utils/props-validation";

class AddReviewScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: DEFAULT_RAITING_IN_REVIEW,
      reviewText: ``
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewTextChange = this.handleReviewTextChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleRatingChange(evt) {
    const value = parseInt(evt.target.value, 10);
    this.setState({rating: value});
  }

  handleReviewTextChange(evt) {
    const value = evt.target.value;
    this.setState({reviewText: value});
  }

  render() {
    const {film} = this.props;
    const {title, poster, background, id} = film;

    const filmScreenLink = `/films/${id}`;

    const starsCount = MAX_STARS_IN_REVIEW;
    const raitingMarkUp = [];

    for (let index = 1; index <= starsCount; index++) {
      const elementId = `star-${index}`;
      const checked = index === this.state.rating;

      raitingMarkUp.push(
          <React.Fragment key={elementId}>
            <input className="rating__input" id={elementId} type="radio" name="rating" value={index} defaultChecked ={checked} onChange = {this.handleRatingChange}/>
            <label className="rating__label" htmlFor={elementId}>Rating 1</label>
          </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={background} alt={title} />
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
                  {raitingMarkUp}
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange = {this.handleReviewTextChange} value={this.state.reviewText}>
                </textarea>
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
