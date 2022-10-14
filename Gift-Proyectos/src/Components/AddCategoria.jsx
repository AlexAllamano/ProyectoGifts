
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

export const AddCategoria = ({ onNuevaCategoria }) => {
  const [inputValor, setInputValor] = useState("");

  const onInputChange = (event) => {
    setInputValor(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValor.trim().length < 1){
        return;
    }
    console.log(inputValor);
    // onNuevaCategoria((categorias) => [ ...categorias ,inputValor])
    onNuevaCategoria(inputValor.trim());
    setInputValor('');
  };

  return (
    <form action="" onSubmit={(event) => onSubmit(event)}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          type="text"
          label="Buscar Gifs"
          placeholder="Buscar"
          value={inputValor}
          variant="outlined"
          color="success"
          onChange={(event) => onInputChange(event)}
        />

      </FormControl>
    </form>
  );
};
