import React from "react";
import PropTypes from "prop-types";

export default function ReusubaleVinylForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="band"
          placeholder="Band/Artist Name" />
        <input 
          type="text"
          name="album"
          placeholder="Album Name" />
        <textarea 
          name="description"
          placeholder="Description" />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusubaleVinylForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}