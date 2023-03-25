import React from "react";
import Vinyl from "./Vinyl";
import PropTypes from "prop-types";

export default function VinylList(props) {
  const availableList = props.vinylList;
  let emptyList = null;
  if (availableList.length === 0) {
    emptyList = 
      <div>
        <p>There are no vinyls currently available in the inventory</p>
        <p>Click "Add Vinyl" to start</p>
      </div>
  }
  
  return (
    <>
      <h2>Vinyl Inventory</h2>
      <hr/>
      {props.vinylList.map((vinyl) =>
        <Vinyl
          whenSellClicked = {props.onSellVinylClicked}
          whenVinylClicked = {props.onVinylSelection}
          band = {vinyl.band}
          album = {vinyl.album}
          quantity = {vinyl.quantity}
          id = {vinyl.id}
          key = {vinyl.id} />
      )}
      {emptyList}
    </>
  );
}

VinylList.propTypes = {
  vinylList: PropTypes.array,
  onVinylSelection: PropTypes.func,
  onSellVinylClicked: PropTypes.func
};