import PropTypes from 'prop-types';
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {DEFAULT_RAITING_IN_REVIEW, MAX_RAITING_IN_REVIEW, ReviewTextLength} from "../../const";
import {selectFilmByID} from "../../store/selectors";
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

const isTextTooShort = (text) => {
  return text.length < ReviewTextLength.MIN;
};

const isTextTooLong = (text) => {
  return text.length > ReviewTextLength.MAX;
};

const isReviewTextValid = (text) =>{
  return !isTextTooShort(text) && !isTextTooLong(text);
};

// TODO: Переписать компонент с использованием хуков
export class AddReviewScreen extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: DEFAULT_RAITING_IN_REVIEW,
      reviewText: ``,
      isSubmitButtonActive: false,
      isSubmitting: false
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
    this.changeIsSubmitButtonActiveState();
  }

  handleReviewTextChange({target}) {
    this.setState({reviewText: target.value});
    this.changeIsSubmitButtonActiveState();
  }

  changeIsSubmitButtonActiveState() {
    this.setState((state) => {
      return {isSubmitButtonActive: isReviewTextValid(state.reviewText)};
    });
  }

  render() {
    const {film} = this.props;
    const {title, poster, background, id} = film;
    const {isSubmitButtonActive, reviewText, rating} = this.state;

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
                        defaultChecked ={item.value === rating}
                        onChange = {this.handleRatingChange}/>
                      <label className="rating__label" htmlFor={item.id}>{item.title}</label>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange = {this.handleReviewTextChange} value={reviewText}>
                </textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" disabled={!isSubmitButtonActive}>Post</button>
                </div>
              </div>
              {isTextTooShort(reviewText) && <div>Необходимо ввести минимум {ReviewTextLength.MIN} символов.</div>}
              {isTextTooLong(reviewText) && <div>Необходимо ввести не более {ReviewTextLength.MAX} символов (лишние {reviewText.length - ReviewTextLength.MAX}).</div>}

              {/* TODO: Убрать тестовое отображение данных формы */}
              <pre>{JSON.stringify(this.state, undefined, 2)}</pre>

            </form>
          </div>

        </section>
      </React.Fragment>
    );
  }
}

AddReviewScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
};

// TODO: подгружать фильм с сервера, GET /films/: id
const mapStateToProps = (state, ownProps) => ({
  film: selectFilmByID(ownProps.id)(state)
});

export default connect(mapStateToProps)(AddReviewScreen);
