import React, { useState, useEffect, useRef, useCallback } from 'react';
import './authenticationModalForms.scss';

const AuthenticationModalForms = () => {
  let [showForm, toggleForms] = useState(false);
  const [showForgottneModalForm, setShowForgottenModal] = useState(false);
  const inputEl = useRef(null);

  const removeInlineStyle = () => {
    document.querySelector('.modal-open').style.removeProperty('padding-right');
  };

  toggleForms = showForm => {
    const signUpBtn = document.getElementsByClassName('signUp')[0].classList;
    const signInBtn = document.getElementsByClassName('signIn')[0].classList;

    if (!showForm) {
      signInBtn.add('active-dx');
      signInBtn.remove('inactive-dx');
      signUpBtn.add('inactive-sx');
      signUpBtn.remove('active-sx');
    } else if (showForm) {
      signInBtn.add('inactive-dx');
      signInBtn.remove('active-dx');
      signUpBtn.add('active-sx');
      signUpBtn.remove('inactive-sx');
    }
  };

  const toggleForgottenPassForm = e => {
    if (e.target.id === 'pass-modal') {
      setShowForgottenModal(false);
    } else if (
      e.target.parentNode.classList &&
      e.target.parentNode.classList.length &&
      e.target.parentNode.classList.value === ''
    ) {
      setShowForgottenModal(false);
    }
  };

  const toggleCheckboxes = useCallback(
    node => {
      if (node !== null) {
        if (
          inputEl.current
            .querySelector('#login-modal')
            .classList.value.includes('in')
        ) {
          document
            .querySelector('#permitted + label')
            .classList.remove('remove-after');
        } else {
          document
            .querySelector('#permitted + label')
            .classList.add('remove-after');
          inputEl.current.querySelector('#permitted').checked = false;
        }
      }
    },
    [inputEl],
  );

  useEffect(() => {
    document.addEventListener('click', toggleForgottenPassForm, false);
    return () =>
      document.removeEventListener('click', toggleForgottenPassForm, false);
  }, []);

  return (
    <>
      <div className="text-right" ref={inputEl}>
        <button
          type="button"
          data-toggle="modal"
          data-target="#login-modal"
          className="register"
          onClick={removeInlineStyle}
        >
          <i className="fa fa-user" aria-hidden="true" />
        </button>
        {showForgottneModalForm ? (
          <div
            className="modal"
            id="pass-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="false"
            style={{ display: 'none' }}
          >
            <div className="container">
              <form>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h3>Forgotten password</h3>
                <p>
                  Enter your credentials
                  <br />
                  for change your password.
                </p>
                <input
                  type="email"
                  placeholder="Insert eMail"
                  autoComplete="off"
                />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Verify Password" />
                <button id="send" type="submit" value="Submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div
            className="modal fade"
            id="login-modal"
            onClick={toggleCheckboxes}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
            style={{ display: 'none' }}
          >
            <div className="container">
              <form className="signUp">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h3>Create Your Account</h3>
                <p>
                  Just enter your email address
                  <br />
                  and your password for join.
                </p>
                <input type="text" placeholder="Insert Name" />
                <input
                  type="email"
                  placeholder="Insert eMail"
                  reqired="true"
                  autoComplete="off"
                />
                <input type="password" placeholder="Insert Password" />
                <input type="password" placeholder="Verify Password" />
                <button
                  className="form-btn sx log-in"
                  type="button"
                  onClick={() => toggleForms(showForm)}
                >
                  Log In
                </button>
                <button className="form-btn dx" type="submit">
                  Sign Up
                </button>
              </form>
              <form className="signIn">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
                <h3>
                  Welcome
                  <br />
                  Back !
                </h3>
                <button className="fb" type="button">
                  Log In With Facebook
                </button>
                <p>- or -</p>
                <input
                  type="email"
                  placeholder="Insert eMail"
                  autoComplete="off"
                />
                <input type="password" placeholder="Insert Password" />
                <div className="label-wrapper">
                  <input id="permitted" type="checkbox" className="unique" />
                  <label htmlFor="permitted" className="side-label">
                    Remember password
                  </label>
                  <input
                    id="permitted-forgotten"
                    type="checkbox"
                    className="unique"
                    onClick={() =>
                      setShowForgottenModal(!showForgottneModalForm)
                    }
                  />
                  <label
                    htmlFor="permitted-forgotten"
                    id="forgot-pass"
                    className="side-label"
                  >
                    Forgotten password ?
                  </label>
                </div>
                <button
                  className="form-btn sx back"
                  type="button"
                  onClick={() => toggleForms(!showForm)}
                >
                  Back
                </button>
                <button className="form-btn dx" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthenticationModalForms;
