import { useEffect } from "react";
import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (categoria) => {
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getGifs(categoria).then((imagenesRespuesta) => {
      setImagenes(imagenesRespuesta);
      setCargando(false);
    });
  }, []);

  return {
    imagenes: imagenes,
    cargando: cargando,
  };
};
