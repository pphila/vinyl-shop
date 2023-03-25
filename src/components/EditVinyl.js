import React from "react";
import ReusubaleVinylForm from "./ReusuableVinylForm";
import PropTypes from "prop-types";

export default function EditVinylForm(props) {
  const { vinyl } = props;

  function handleEditVinylFormSubmission(e) {
    e.preventDefault();
    props.onEditTicket({
      band: e.target.band.value, 
      album: e.target.album.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      id: vinyl.id
    });
  }
  return(
    <>
      <ReusubaleVinylForm
        formSubmissionHandler={handleEditVinylFormSubmission}
        buttonText="Edit Vinyl" />
    </>
  );
}

EditVinylForm.propTypes = {
  vinyl: PropTypes.object,
  onEditTicket: PropTypes.func
}