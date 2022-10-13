import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftApp } from './GiftApp'
import { Container } from "@mui/material";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <GiftApp />
    </Container>
  </React.StrictMode>
)
