import React from "react";
import PropTypes from "prop-types";

export default function VinylDetail(props){
  const { vinyl } = props;
  return(
    <>
      <h2>Vinyl Details</h2>
      <h3>Band/Artist: {vinyl.band}</h3>
      <h3>Album: {vinyl.album}</h3>
      <h4>Description: {vinyl.description}</h4>
      <h4>Quantity: <strong>{vinyl.quantity}</strong></h4>
      <button onClick={props.onClickingEdit}>Edit Vinyl</button>
    </>
  );
}

VinylDetail.propTypes = {
  vinyl: PropTypes.object,
}