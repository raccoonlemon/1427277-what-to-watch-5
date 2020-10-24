import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {DEFAULT_RAITING_IN_REVIEW, MAX_RAITING_IN_REVIEW} from "../../const";
import {filmShape} from "../../utils/props-validation";
import Header from "../header/header";

const starsCount = MAX_RAITING_IN_REVIEW;
const ratingItems = [];
for (let index = 1; index <= starsCount; index++) {
  ratingItems.push({
    id: `star-${index}`,
    value: index,
    title: `Rating ${index}`
  });
}

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

  handleRatingChange({target}) {
    this.setState({rating: parseInt(target.value, 10)});
  }

  handleReviewTextChange({target}) {
    this.setState({reviewText: target.value});
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
              <img src={background} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header>
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
            </Header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit = {this.handleSubmit}>
              <div className="rating">
                <div className="rating__stars">
                  {ratingItems.map((item)=>(
                    <React.Fragment key={item.id}>
                      <input className="rating__input"
                        id={item.id}
                        type="radio"
                        name="rating"
                        value={item.value}
                        defaultChecked ={item.value === this.state.rating}
                        onChange = {this.handleRatingChange}/>
                      <label className="rating__label" htmlFor={item.id}>{item.title}</label>
                    </React.Fragment>
                  ))}
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
