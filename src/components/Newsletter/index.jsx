import React from 'react';
import { hot } from 'react-hot-loader';
// import uuid from 'uuid';
// import PropTypes from 'prop-types';

import './newsletter.scss';

const newsletter = () => (
  <div className="thumbnail center well well-sm newsletter text-center">
    <h2>Newsletter</h2>
    <p>Subscribe to our weekly Newsletter and stay tuned</p>
    <form>
      <div className="input-group">
        <span className="input-group-addon news_input" />
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          placeholder="your@email.com"
        />
      </div>
      <div className="button raised hoverable">
        <div className="anim" />
        <span>Subscribe</span>
      </div>
    </form>
  </div>
);

export default hot(module)(newsletter);
