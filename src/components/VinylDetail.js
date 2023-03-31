import React from "react";
import PropTypes from "prop-types";

export default function VinylDetail(props){
  const { vinyl, onClickingDelete } = props;
  return(
    <>
      <h2 className="text-4xl py-2 text-center text-gray-200">Vinyl Details</h2>
      <div className="w-1/2 bg-gray-300 text-center p-5 ml-auto mr-auto text-xl font-bold">
        <h3 className="">Band/Artist: {vinyl.band}</h3>
        <h3>Album: {vinyl.album}</h3>
        <h4>Description: {vinyl.description}</h4>
        <h4 className="text-green-700">Quantity: <strong>{vinyl.quantity}</strong></h4>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={props.onClickingEdit}>Edit Vinyl</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={()=> onClickingDelete(vinyl.id) }>Remove Crate</button>
      </div>
    </>
  );
}

VinylDetail.propTypes = {
  vinyl: PropTypes.object,
  onClickingDelete: PropTypes.func
}