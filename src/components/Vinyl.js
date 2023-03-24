import React from "react";
import PropTypes from "prop-types";

export default function Vinyl() {
  return (
    <>
      <h3>{props.band}</h3>
      <h4><em>{props.album}</em></h4>
      <h4></h4>
      <h4>{props.quantity}</h4>
    </>
  );
}