import React from "react";
import PropTypes from "prop-types";

export default function ReusubaleVinylForm(props) {
  return (
    <>
      <h2 className="text-4xl py-2 text-center">New Vinyl</h2>
      <div class="flex justify-center">
        <form onSubmit={props.formSubmissionHandler}>
          <div class="m-2 ">
            <input
              type="text"
              name="band"
              placeholder="Band/Artist Name" 
              className="text-black-800 text-opacity-100"/>
          </div>
          <div class="m-2">
            <input 
              type="text"
              name="album"
              placeholder="Album Name" />
          </div>
          <div class="m-2">
            <textarea 
              name="description"
              placeholder="Description" />
          </div>
          <div class="m2 ml-2 pb-5">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"/>
          </div>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusubaleVinylForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}