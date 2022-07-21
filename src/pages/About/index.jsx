import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
// import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

import './about.scss';

import Helmet from '../../components/Helmet';
import Newsletter from '../../components/Newsletter';

const About = () => {
  const [currentDate, onChangeDate] = useState({ date: new Date() });

  return (
    <>
      <Helmet title="Healthy benefits | About" />
      <div className="container main">
        <div className="row">
          <div className="col-md-8">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
          <div className=" col-xs-12 col-md-4">
            <Calendar value={currentDate.date} />
            <div className="row more-marg">
              <div className="col-md-12">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(module)(About);
