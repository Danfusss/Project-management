import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";
import {
  selectNumber,
  setNumber,
} from "../../../../store/FilterSlice/todoSlice";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";

const FilterInputName = () => {
  const [projectInputNumber, setProjectInputNumber] = useState("");
  const number = useAppSelector(selectNumber);
  const dispatch = useAppDispatch();
  const inputName = () => dispatch(setNumber(projectInputNumber));

  useEffect(() => {
    inputName();
  }, [projectInputNumber]);

  return (
    <Box>
      <TextField
        variant="standard"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                paddingLeft: "1rem",
                color: "black",
                fontFamily: "Roboto",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "0.875rem",
                opacity: "1",
              }}
            >
              ЮБСЛ №
            </InputAdornment>
          ),
        }}
        onChange={(e) => setProjectInputNumber(e.target.value)}
        value={projectInputNumber}
        sx={{
          paddingTop: "0.5rem",
          width: "20vw",
          height: "3.3vh",
          borderRadius: "4px",
          border: "1px solid #CBCBCB",
          backgroundColor: "#FFF",
        }}
      />
    </Box>
  );
};

export default FilterInputName;
