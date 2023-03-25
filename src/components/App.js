import React from "react";
import Header from "./Header";
import '../App.css';
import VinylControl from "./VinylControl";

function App() {
  return (
    <>
      <div class="md:container md:mx-auto pt-10">
        <Header />
        <VinylControl />
      </div>
      
    </>
  );
}

export default App;
