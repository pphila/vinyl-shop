import React from "react";
import PropTypes from "prop-types";

export default function Vinyl(props) {
  let inventoryWarn = null;
  if (props.quantity < 1) {
    inventoryWarn = <p className="font-bold text-red-800">OUT OF STOCK!</p>
  } else if (props.quantity <= 10 ) {
    inventoryWarn = <p className="font-bold text-yellow-800">Inventory Low!</p>
  }
  
  return (
    <>
      <div onClick={() => props.whenVinylClicked(props.id)}>
        <h3>{props.band}</h3>
        <h4><em>{props.album}</em></h4>
        <h4>{props.description}</h4>
        <h4 class="text-green-700">{props.quantity}</h4> {/*quantity amount will determine low stock or out of stock warning using conditionals?*/}
        {inventoryWarn}
      </div>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={()=> props.whenSellClicked(props.id)}>Sell</button>
    </>
  );
}

Vinyl.propTypes = {
  band: PropTypes.string,
  album: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenVinylClicked: PropTypes.func,
  whenSellClicked: PropTypes.func,
  inventoryWarn: PropTypes.bool
};
