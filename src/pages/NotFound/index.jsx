import React from 'react';
import { Helmet } from 'react-helmet-async';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

import './notfound.scss';

const notfound = () => (
  <>
    <Helmet title="Healthy benefits | 404: Page not found">
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
    </Helmet>
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can&#39;t be found</h2>
        </div>
        <Link to="/">Go TO Homepage</Link>
      </div>
    </div>
  </>
);

export default hot(module)(notfound);
