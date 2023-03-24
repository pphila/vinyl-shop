import React from "react";
import PropTypes from "prop-types";
import ReusubaleVinylForm from "./ReusuableVinylForm";
import { v4 } from "uuid";

export default function NewVinylForm(props) {

  function handleNewVinylFormSubmission(e) {
    e.preventDefault();
    props.onNewVinylCreation({
      band: e.target.band.value,
      album: e.target.album.value,
      description: e.target.album.value,
      quantity: e.target.quantity.value,
      id: v4()
    });
  }

  return(
    <>
      <ReusubaleVinylForm
        formSubmissionHandler={handleNewVinylFormSubmission}
        buttonText="Submit"/>
    </>
  );
}

NewVinylForm.propTypes = {
  onNewVinylCreation: PropTypes.func
}