import React from "react";
import Fondo from "../../Fondo";
import Footer from "../../footer";
import Headers from "../../headers";


export const Inicio = () =>{
  return (
    <div className="App dark">
      <Headers></Headers>
      <Fondo></Fondo>
      <Footer></Footer>
    </div>
  );
}

export default Inicio;
