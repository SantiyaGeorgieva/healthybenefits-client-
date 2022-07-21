import React from 'react';
// import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
// import PropTypes from 'prop-types';
import './contact.scss';
import Helmet from '../../components/Helmet';
import Newsletter from '../../components/Newsletter';

const Contact = () => (
  <>
    <Helmet title="Healthy benefits | Contact" />
    <div className="container main">
      <div className="row">
        <div className="col-md-8">
          <form id="contactForm" method="post" className="form-horizontal">
            <div className="form-group">
              <label className="col-xs-3 control-label">Name</label>
              <div className="col-xs-9 col-sm-6 col-md-6">
                <input type="text" className="form-control" name="fullName" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-3 control-label">Email</label>
              <div className="col-xs-9 col-sm-6 col-md-6">
                <input type="text" className="form-control" name="email" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-3 control-label">About</label>
              <div className="col-xs-9 col-sm-6 col-md-6">
                <input type="text" className="form-control" name="title" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-3 control-label">Message</label>
              <div className="col-xs-9 col-sm-6 col-md-6">
                <textarea className="form-control" name="content" rows="6" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-xs-9 col-xs-offset-3">
                <div id="messages" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-xs-9 col-xs-offset-3 text-right">
                <button type="reset" className="btn btn-default">
                  Clear
                </button>
                <button type="submit" className="btn btn-default contact_send">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <Newsletter />
        </div>
      </div>
    </div>
  </>
);

export default hot(module)(Contact);
