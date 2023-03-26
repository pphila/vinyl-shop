import React from "react";
import PropTypes from "prop-types";
import turntable from "./img/turntable.png";

export default function Vinyl(props) {
  let inventoryWarn = null;
  if (props.quantity < 1) {
    inventoryWarn = <p className="font-bold text-red-800">OUT OF STOCK!</p>
  } else if (props.quantity <= 10 ) {
    inventoryWarn = <p className="font-bold text-yellow-800">Inventory Low!</p>
  }
  
  return (
    <>
      <div class="grid grid-flow-col-dense gird-flow-col-dense">
        <div class="bg-teal-400 max-w-sm rounded overflow-hidden shadow-lg m-2">
          <div onClick={() => props.whenVinylClicked(props.id)}>
            <img class="w-full" src={turntable} alt=""/>
            <div class="text-white text-center p-2">
              <h3 class="text-2xl font-bold">{props.band}</h3>
              <h4 class="text-xl"><em>{props.album}</em></h4>
              <h4>{props.description}</h4>
              <h4 class="text-green-700 font-extrabold">{props.quantity}</h4> {/*quantity amount will determine low stock or out of stock warning using conditionals?*/}
              {inventoryWarn}
            </div>
          </div>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow mr-5" onClick={()=> props.whenSellClicked(props.id)}>Sell</button>
        </div>
      </div>
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
