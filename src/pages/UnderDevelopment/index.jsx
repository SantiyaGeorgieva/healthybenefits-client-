import React from 'react';
// import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { useLocation } from 'react-router';
// import PropTypes from 'prop-types';

import './underDevelopment.scss';

import Helmet from '../../components/Helmet';
// import Newsletter from '../../components/Newsletter';
import HealthyNewsBanner from '../../assets/images/woman-in-gray-sweater-using-macbook-3907407.jpg';
import HealthyFitnessBanner from '../../assets/images/dumbbell-equipment-fitness-flatlay-669578.jpg';
import HealthyFoodBanner from '../../assets/images/carrots-food-fresh-freshness-616404.jpg';
import HealthyStoreBanner from '../../assets/images/assorted-jars-on-blue-shelf-cabinets-165228.jpg';

const UnderDevelopment = () => {
  const currentPath = useLocation().pathname;

  function loadImage(path) {
    switch (path) {
      case 'news':
        return HealthyNewsBanner;
      case 'fitness':
        return HealthyFitnessBanner;
      case 'food':
        return HealthyFoodBanner;
      case 'store':
        return HealthyStoreBanner;
      default:
        break;
    }
  }

  return (
    <>
      <Helmet title="Healthy benefits | Coming soon" />
      <div className="coming-soon-page">
        <div className="row">
          <div className="col-md-12">
            <img
              src={loadImage(currentPath.slice(1))}
              className="image-banner"
              alt="healthy-banner"
            />
            <div className="coming-soon-text">
              <h1>Coming Soon!</h1>
              <h2>Stay tuned</h2>
              {/* <Newsletter /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(module)(UnderDevelopment);
