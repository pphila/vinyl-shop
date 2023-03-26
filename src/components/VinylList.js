import React from "react";
import Vinyl from "./Vinyl";
import PropTypes from "prop-types";

export default function VinylList(props) {
  const availableList = props.vinylList;
  let emptyList = null;
  if (availableList.length === 0) {
    emptyList = 
      <div class="w-2/5 ml-auto mr-auto">
        <div class="bg-teal-800 bg-opacity-25 w-1.25 text-center py-2 mb-5 border-l border-r border-b-2 border-black-300 rounded">
          <div>
            <p class="text-white font-semibold">There are no vinyls currently available in the inventory</p>
            <p class="text-white font-semibold">Click "Add Vinyl" to start</p>
          </div>
        </div>
      </div>
  }
  
  return (
    <>
      <h2 class="text-4xl py-2 text-center text-gray-200">Vinyl Inventory</h2>
      
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