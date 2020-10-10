import React from "react";
import Typical from "react-typical";

const signup = () => (
  <div>
    <Typical
      steps={[
        "SignUp Page",
        3000,
        "Still in Development",
        5000,
      ]}
      loop={Infinity}
      wrapper="h2"
    />
  </div>
);

export default signup;