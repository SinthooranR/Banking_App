import React from "react";
import Typical from "react-typical";

const welcome = () => (
  <div>
    <Typical
      steps={[
        "Welcome",
        3000,
        "Still in Development",
        5000,
      ]}
      loop={Infinity}
      wrapper="h2"
    />
  </div>
);

export default welcome;
