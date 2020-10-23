import React, { useContext, useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import { Authenticate } from "../../authContext";
import classes from "./Overview.module.css";

const Overview = () => {
  const auth = useContext(Authenticate);
  // const [username , setUsername ] = useState("");
  const [name , setName ] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const httpResult = await axios.get(
        `http://localhost:5000/api/users/${auth.user_id}`
      );
      // setUsername(httpResult.data.user.username);
      setName(httpResult.data.user.name);
    };

    fetchData();
  }, [auth.user_id]);

  return(
    <div className={classes.Overview}>
      <Typical
      steps={[
        `Welcome, ${name}!`,
        3000,
        "Here is your overview",
        5000,
      ]}
      loop={Infinity}
      wrapper="h2"
    />
    </div>

  )
}; 

export default Overview;
