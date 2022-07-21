import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const helmet = ({ title }) => (
  <Helmet>
    <base href="/" />
    <meta charset="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <title>{title}</title>
    <link rel="shortcut icon" href="./assets/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway"
      rel="stylesheet"
    />
    <link
      href="http://weloveiconfonts.com/api/?family=entypo"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700"
      rel="stylesheet"
    />
    {/*  <script src="/index.jsx"></script> */}
  </Helmet>
);

helmet.defaultProps = {
  title: '',
};

helmet.propTypes = {
  title: PropTypes.string,
};

export default helmet;
