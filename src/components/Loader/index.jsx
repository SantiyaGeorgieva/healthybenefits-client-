import React, { useState, useEffect } from 'react';
import './loader.scss';

const Loader = props => {
  const [showLoader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoader(false), 200);
  }, []);

  return showLoader ? (
    <div className="loader-wrapper">
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ) : (
    <>{props.children}</>
  );
};

export default Loader;
