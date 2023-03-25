import React from "react";
import PropTypes from "prop-types";

export default function VinylDetail(props){
  const { vinyl, onClickingDelete } = props;
  return(
    <>
      <h2>Vinyl Details</h2>
      <h3>Band/Artist: {vinyl.band}</h3>
      <h3>Album: {vinyl.album}</h3>
      <h4>Description: {vinyl.description}</h4>
      <h4>Quantity: <strong>{vinyl.quantity}</strong></h4>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={props.onClickingEdit}>Edit Vinyl</button>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={()=> onClickingDelete(vinyl.id) }>Remove Crate</button>
    </>
  );
}

VinylDetail.propTypes = {
  vinyl: PropTypes.object,
  onClickingDelete: PropTypes.func
}