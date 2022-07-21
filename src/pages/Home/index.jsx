import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
// import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
// import PropTypes from 'prop-types';

import './home.scss';

import Helmet from '../../components/Helmet';

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  autoplaySpeed: 4000,
  pauseOnHover: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Home = () => (
  <Fragment>
    <Helmet title="Healthy benefits" />
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="image">
          <Link to="/">
            <img className="img-slr-1 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
        <div className="image">
          <Link to="/">
            <img className="img-slr-2 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
        <div className="image">
          <Link to="/">
            <img className="img-slr-3 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
        <div className="image">
          <Link to="/">
            <img className="img-slr-4 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
        <div className="image">
          <Link to="/">
            <img className="img-slr-5 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
        <div className="image">
          <Link to="/">
            <img className="img-slr-6 images" alt="image" />
            <h2>lorem</h2>
            <span>Lorem ipsum dolor sit amet.</span>
          </Link>
        </div>
      </Slider>
    </div>
  </Fragment>
);

export default hot(module)(Home);
