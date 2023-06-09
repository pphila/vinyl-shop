import React from "react";
import PropTypes from "prop-types";

export default function ReusubaleVinylForm(props) {
  return (
    <>
      <h2 className="text-4xl py-2 text-center text-gray-200">New Vinyl</h2>
      <div className="flex justify-center">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="m-2 ">
            <input
              type="text"
              name="band"
              placeholder="Band/Artist Name" 
              className="text-black-800 text-opacity-100"/>
          </div>
          <div className="m-2">
            <input 
              type="text"
              name="album"
              placeholder="Album Name" />
          </div>
          <div className="m-2">
            <textarea 
              name="description"
              placeholder="Description" />
          </div>
          <div className="m2 ml-2 pb-5">
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"/>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusubaleVinylForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}