import {React, useEffect, useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useFetchGif } from "../hooks/useFetchGif";


export const GrillaGifs = ({categoria}) => {

 
  const {imagenes, cargando} = useFetchGif(categoria);

  return (
    <>
      <h3>{categoria}</h3>

      <ImageList sx={{ width: "80%", height: "60vh", margin: "0 auto" }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {imagenes.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.url}
              alt={item.titulo}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.titulo}
              subtitle={item.titulo}
              actionIcon={
                <IconButton
                  href={item.url}
                  target="_blank"
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.titulo}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};



