import React from "react";
import Typical from "react-typical";

import classes from './Overview.module.css';

const overview = () => (
  <div>
    <Typical
      steps={[
        "Overview",
        3000,
        "Still in Development",
        5000,
      ]}
      loop={Infinity}
      wrapper="h2"
    />
  </div>
);

export default overview;
