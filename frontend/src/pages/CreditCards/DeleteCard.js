import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Authenticate } from "../../authContext";
import Button from "@material-ui/core/Button";
import axios from "axios";
import classes from './DeleteCard.module.css';


const DeleteCard = () => {
    const auth = useContext(Authenticate);
    const history = useHistory();

    const deleteCardHandler = () => {
        axios
            .delete(`http://localhost:5000/api/cards/${auth.card_id}`)
            .then((response) => {
                console.log(response);
                history.push("/cards");
            })
            .catch((error) => {
                // history.push("/authentication"); //ERROR REDIRECT TEST
                console.log(error);
            });
        auth.grabCard(null);
        history.push("/");
    };

    const cancelHandler = (event) => {
        history.push("/cards");
        event.preventDefault();
    };
    return (
        <div className={classes.Delete}>
            <h2> Are you sure you want to delete this Card?</h2>
            <Button
                color="primary"
                onClick={cancelHandler}
                variant="contained"
                style={{ display: "inline" }}
            >
                CANCEL
      </Button>
            <Button
                color="secondary"
                onClick={deleteCardHandler}
                variant="contained"
                style={{ display: "inline" }}
            >
                YES
      </Button>
        </div>
    );
};

export default DeleteCard;