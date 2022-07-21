import React, { Fragment } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo7.png';

import './footer.scss';

const Footer = ({ menuItems, socialItems }) => (
  <Fragment>
    <div className="footer-wrapper">
      <div className="footer-innerwrapper">
        <div className="container">
          <div className="marg-bott">
            <div>
              <ul className="footer-menu">
                {menuItems.map((element, index) => {
                  if (index < 4) {
                    return (
                      <li key={uuid()}>
                        <NavLink
                          exact={true}
                          className="nav-link"
                          activeClassName="active"
                          to={element.linkTo}
                        >
                          {element.text}
                        </NavLink>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div>
              <ul className="footer-menu">
                {menuItems.map((element, index) => {
                  if (index >= 4) {
                    return (
                      <li key={uuid()}>
                        <NavLink
                          exact={true}
                          className="nav-link"
                          activeClassName="active"
                          to={element.linkTo}
                        >
                          {element.text}
                        </NavLink>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div>
              <ul className="social-sharing-icons">
                <div>
                  {socialItems.map(({ to, title, classname }, index) => {
                    if (index < 3) {
                      return (
                        <li key={uuid()}>
                          <Link to={to} title={title}>
                            <i
                              className={`fa entypo-${classname}`}
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    }
                  })}
                </div>
                <div>
                  {socialItems.map(({ to, title, classname }, index) => {
                    if (index >= 3) {
                      return (
                        <li key={uuid()}>
                          <Link to={to} title={title}>
                            <i
                              className={
                                classname === 'fa-youtube'
                                  ? `fa ${classname}`
                                  : `fa entypo-${classname}`
                              }
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    }
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row footer-row">
            <div className="col-md-4 text-left">
              <Link to="/">
                <img src={logo} className="img-responsive" alt="logo" />
              </Link>
            </div>
            <div className="col-md-4 text-center">
              {new Date().getFullYear()} © All right reserved
            </div>
            <div className="col-md-4 text-right">Created by Santiya</div>
          </div>
        </div>
      </footer>
    </div>
  </Fragment>
);

Footer.defaultProps = {
  menuItems: [],
  socialItems: [],
};

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      linkTo: PropTypes.string,
    }),
  ),
  socialItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string,
      class: PropTypes.string,
    }),
  ),
};

export default Footer;
