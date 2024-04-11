import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";

import { Autocomplete, Box, TextField, Typography } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

import {
  selectLocation,
  setLocation,
} from "../../../../store/FilterSlice/todoSlice";

const FilterLocation = ({
  defaultData,
}: {
  defaultData: Array<CardConfig>;
}) => {
  let options = defaultData.map((el) => {
    return el.city;
  });
  const newLocal = (options = [...new Set(options)]);

  const [value, setValue] = useState<string[]>([]);
  const [inputCity, setInputCity] = useState("");
  const city = useAppSelector(selectLocation);
  const dispatch = useAppDispatch();
  const inputLocation = () => dispatch(setLocation(value));
  useEffect(() => {
    inputLocation();
  }, [value]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"20vw"}
    >
      <Typography variant="body1"> Место</Typography>
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputCity}
        onInputChange={(event, newInputValue) => {
          setInputCity(newInputValue);
        }}
        id="controllable-states-demo"
        options={newLocal}
        sx={{
          backgroundColor: "#FFF",
          width: "12.3vw",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: "0.1875rem",
              border: "1px solid #CBCBCB",
            },
          },
          "& input": {
            height: "0.3vh",
          },
          "& fieldset": {
            border: "1px solid #000",
          },
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Box>
  );
};

export default FilterLocation;
