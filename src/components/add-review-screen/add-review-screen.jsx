import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {DEFAULT_RAITING_IN_REVIEW, MAX_RAITING_IN_REVIEW, ReviewTextLength} from "../../const";
import {useForm} from '../../hooks/useForm';
import {fetchFilmById} from '../../store/api-actions';
import {selectFilm, selectIsFilmLoaded} from "../../store/selectors";
import {extend} from "../../utils/common";
import {filmShape} from "../../utils/props-validation";
import Header from "../header/header";

const ratingItems = [];
for (let index = 1; index <= MAX_RAITING_IN_REVIEW; index++) {
  ratingItems.push({
    id: `star-${index}`,
    value: index,
    title: `Rating ${index}`
  });
}

const validate = ({reviewText, rating})=>{
  let isValid = true;
  const messages = [];

  if (reviewText.length < ReviewTextLength.MIN) {
    isValid = false;
    messages.push(`Minimun review length - ${ReviewTextLength.MIN} symbols. Current lenght - ${reviewText.length}.`);
  }

  if (reviewText.length > ReviewTextLength.MAX) {
    isValid = false;
    messages.push(`Maximum review length - ${ReviewTextLength.MAX} symbols. Need to delete - ${reviewText.length - ReviewTextLength.MAX}.`);
  }

  if (!rating) {
    isValid = false;
    messages.push(`Please, select the rating score.`);
  }

  return {isValid, messages};
};

export const AddReviewScreen = (props) => {
  const {film, isFilmLoaded, loadFilmInfo, id} = props;
  const {title, poster, background} = film;

  useEffect(() => {
    if (!isFilmLoaded) {
      loadFilmInfo(id);
    }
  });

  const initialValues = {reviewText: ``, rating: DEFAULT_RAITING_IN_REVIEW};
  const {validation, values, changeValue} = useForm(initialValues, validate);
  const {reviewText, rating} = values;

  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  useEffect(()=>{
    setIsSubmitButtonActive(validation.isValid);
  }, [validation]);

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
          <form action="#" className="add-review__form" onSubmit = {()=>{}}>
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
                      onChange = {({target})=>
                        changeValue({rating: parseInt(target.value, 10)})}/>
                    <label className="rating__label" htmlFor={item.id}>{item.title}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange = {({target})=>changeValue({reviewText: target.value})}
                value={reviewText}>
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={!isSubmitButtonActive}>Post</button>
              </div>
            </div>
            {validation.messages.map((item, index)=><div key={index}>{item}</div>)}

          </form>
        </div>

      </section>
    </React.Fragment>
  );
};

AddReviewScreen.propTypes = {
  id: PropTypes.string.isRequired,
  film: filmShape.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  loadFilmInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state, {id}) => (
  {
    film: selectFilm(state),
    isFilmLoaded: selectIsFilmLoaded(id)(state)
  });

const mapDispatchToProps = (dispatch) => ({
  loadFilmInfo(id) {
    dispatch(fetchFilmById(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
