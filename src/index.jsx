import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import './app.scss';

// constants
import headerItems from './constants/HeaderItems';
import socialLinks from './constants/FooterSocialItems';

// components
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UnderDevelopment from './pages/UnderDevelopment';

// import configureStore from './store/configureStore';
// const store = configureStore();

const appWrapper = (
  // <Provider store={store}>
  <HelmetProvider>
    <Router>
      <Header menuItems={headerItems} />
      <Loader component={Route}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={UnderDevelopment} />
          <Route path="/fitness" component={UnderDevelopment} />
          <Route path="/food" component={UnderDevelopment} />
          <Route te path="/store" component={UnderDevelopment} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
          {/* <Route exact path="/news" component={ProductsRoutes} /> */}
        </Switch>
      </Loader>
      <Footer menuItems={headerItems} socialItems={socialLinks} />
    </Router>
  </HelmetProvider>
  // </Provider>
);

ReactDOM.render(appWrapper, document.getElementById('root'));
