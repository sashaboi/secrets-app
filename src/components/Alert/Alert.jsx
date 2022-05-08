import React from 'react';

import { UseAlert } from '../../context/Alert-context';
import './alert.css';
const Alert = () => {
  const { alertmessage } = UseAlert();
  return (
    <div className="alert-parent">
      <div className="alert-container">{alertmessage}</div>
    </div>
  );
};

export default Alert;
