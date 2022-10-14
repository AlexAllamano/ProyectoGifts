import { useState } from "react";
import { AddCategoria } from "./Components/AddCategoria";

import { GrillaGifs } from "./Components/grillaGifs";

export const GiftApp = () => {
  const [categorias, setCategorias] = useState(["Forza Horizon"]);

  const agregar = (nuevaCategoria) => {

    if(categorias.includes(nuevaCategoria)){
        return;
    }

    setCategorias([...categorias, nuevaCategoria])
  }

  return (
    <>
      <h1>GiftApp</h1>

      <AddCategoria 
        onNuevaCategoria={(event) => agregar(event)}
      />


      {categorias.map( item => {
        return <GrillaGifs key={item} categoria={item}/>;
      })}

      
    </>
  );
};


