import React from "react";
import Vinyl from "./Vinyl";
import PropTypes from "prop-types";

export default function VinylList() {
  return (
    <>
      <h1>Vinyl Inventory</h1>
      {props.vinylList.map((vinyl) =>
        <Vinyl
          whenVinylClicked = { props.onVinylSelection }
          band = { vinyl.band }
          album = { vinyl.album }
          description = { vinyl.description }
          quantity = { vinyl.quantity }
          />
      )}
    </>
  );
}

VinylList.propTypes = {
  vinylList: PropTypes.array,
  onVinylSelection: PropTypes.func
};