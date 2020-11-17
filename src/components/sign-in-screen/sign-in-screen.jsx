import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RexExp} from '../../const';
import {useForm} from '../../hooks/useForm';
import {userRequested} from '../../store/actions/user';
import {logIn as logInAction} from "../../store/api-actions";
import Footer from "../footer/footer";
import Header from "../header/header";

const validate = ({email, password})=>{
  let isValid = true;
  const messages = [];

  if (!email) {
    isValid = false;
    messages.push(`Empty email.`);
  }

  if (email && !RexExp.email.test(email)) {
    isValid = false;
    messages.push(`Incorrect email.`);
  }

  if (!password) {
    isValid = false;
    messages.push(`Empty password.`);
  }

  return {isValid, messages};
};

// TODO:
// Обработка ошибок сервера.
// Блокировка кнопки пока обрабатывается запрос на сервер.

const SignInScreen = (props) => {

  const {onSubmitAction} = props;


  const initialValues = {email: ``, password: ``};
  const {validation, values, changeValue} = useForm(initialValues, validate);
  const {email, password} = values;

  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  useEffect(()=>{
    setIsSubmitButtonActive(validation.isValid);
  }, [validation]);

  return (
    <div className="user-page">
      <Header className="user-page__head" needToShowUserMenu={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange = {({target})=>changeValue({email: target.value})}
                value = {email}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={({target})=>changeValue({password: target.value})}
                value = {password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            {isSubmitButtonActive && <button
              className="sign-in__btn"
              type="submit"
              onClick={(evt)=>{
                evt.preventDefault();
                onSubmitAction(values);
              }}>Sign in</button>}
          </div>
          {validation.messages.map((item, index)=><div key={index}>{item}</div>)}
        </form>
      </div>

      <Footer/>
    </div>);
};

SignInScreen.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(authData) {
    dispatch(userRequested());
    dispatch(logInAction(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignInScreen);
