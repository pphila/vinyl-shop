import React from "react";
import PropTypes from "prop-types";

export default function Vinyl(props) {
  let inventoryWarn = null;
  if (props.quantity < 1) {
    inventoryWarn = <p>OUT OF STOCK!</p>
  } else if (props.quantity <= 10 ) {
    inventoryWarn = <p>Inventory Low!</p>
  }
  
  return (
    <>
      <div onClick={() => props.whenVinylClicked(props.id)}>
        <h3>{props.band}</h3>
        <h4><em>{props.album}</em></h4>
        <h4>{props.description}</h4>
        <h4>{props.quantity}</h4> {/*quantity amount will determine low stock or out of stock warning using conditionals?*/}
        {inventoryWarn}
      </div>
      <button onClick={()=> props.whenSellClicked(props.id)}>Sell</button>
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
