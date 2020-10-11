import React from "react";
import Typical from "react-typical";

const cardmanage = () => (
  <div>
    <Typical
      steps={[
        "Credit Card Management Page",
        3000,
        "Still in Development",
        5000,
      ]}
      loop={Infinity}
      wrapper="h2"
    />
  </div>
);

export default cardmanage;