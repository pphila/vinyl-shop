import React from "react";
import Vinyl from "./Vinyl";
import PropTypes from "prop-types";

export default function VinylList(props) {
  return (
    <>
      <h2>Vinyl Inventory</h2>
      <hr/>
      {props.vinylList.map((vinyl) =>
        <Vinyl
          whenVinylClicked = {props.onVinylSelection}
          band = {vinyl.band}
          album = {vinyl.album}
          quantity = {vinyl.quantity}
          id = {vinyl.id}
          key = {vinyl.id} />
      )}
    </>
  );
}

VinylList.propTypes = {
  vinylList: PropTypes.array,
  onVinylSelection: PropTypes.func
};