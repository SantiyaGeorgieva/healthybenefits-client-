import React, { useState, useEffect, useRef } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import AuthenticationModalForms from '../AuthenticationModalForms';

import './header.scss';
import logo from '../../assets/images/logo6.png';

const Header = ({ menuItems }) => {
  const size = useWindowSize();
  const node = useRef(null);
  const [height, setHeight] = useState(0);

  // Hook
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? screen.width : undefined,
        height: isClient ? screen.height : undefined,
      };
    }

    function containerHeight(v) {
      if (size.width <= 767) {
        document.querySelector('.register').style.top = `calc(
          100% - ${v.current.clientHeight}px)`;
      }
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
        setHeight(containerHeight(node));
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  return (
    <>
      <div className="container header-container" ref={node}>
        <div className="row more-margin-top">
          <div className="col-xs-1 col-md-3">
            <ul className="text-left">
              <li className="dropdown">
                <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                  <span>EN</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">BG</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-xs-10 col-md-6">
            <Link to="/">
              <img src={logo} className="img-responsive" alt="Brand" />
            </Link>
          </div>
          <div className="col-xs-12 col-sm-1 col-md-3">
            {size.width <= 767 ? (
              <div>
                <input type="text" name="search" className="inputbox2" />
              </div>
            ) : (
              <form className="inputbox ">
                <input
                  type="text"
                  name="search"
                  autoComplete="off"
                  required="required"
                />
                <button type="button" className="del" />
              </form>
            )}
            <AuthenticationModalForms />
          </div>
        </div>
      </div>

      <div className="wrapper-menu">
        <header className="bs-docs-nav navbar navbar-static-top">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  aria-controls="bs-navbar"
                  aria-expanded="false"
                  id="mytoggle"
                  className="collapsed navbar-toggle"
                  data-target="#bs-navbar"
                  data-toggle="collapse"
                  type="button"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
            <nav className="collapse navbar-collapse" id="bs-navbar">
              <ul className="nav navbar-nav">
                {menuItems.map(element => (
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
                ))}
              </ul>
            </nav>
          </nav>
        </header>
      </div>
    </>
  );
};

Header.defaultProps = {
  menuItems: [],
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      linkTo: PropTypes.string,
    }),
  ),
};

export default Header;
