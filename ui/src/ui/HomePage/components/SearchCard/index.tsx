import { Dispatch } from "react";

import { InputAdornment, TextField } from "@mui/material";

const SearchCard = ({
  projectInputNumber,
  setProjectInputNumber,
}: {
  projectInputNumber: string;
  setProjectInputNumber: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <TextField
        onChange={(e) => setProjectInputNumber(e.target.value)}
        label="Введите номер вашего проекта"
        value={projectInputNumber}
        sx={{ m: 1, width: "25vw" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">ЮБСЛ №</InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchCard;
