import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/redux/hooks";
import { setClient } from "../../../../store/FilterSlice/todoSlice";

import { Autocomplete, Box, TextField, Typography } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const FilterClient = ({ defaultData }: { defaultData: Array<CardConfig> }) => {
  let options = defaultData.map((el) => {
    return el.clientName;
  });
  const newCompany = (options = [...new Set(options)]);

  const [valueClient, setValueClient] = useState<string[]>([]);
  const [inputValueClient, setInputValueClient] = useState("");

  const dispatch = useAppDispatch();
  const inputClient = () => dispatch(setClient(valueClient));

  useEffect(() => {
    inputClient();
  }, [valueClient]);

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"20vw"}
      >
        <Typography variant="body1"> Заказчик</Typography>
        <Autocomplete
          multiple
          value={valueClient}
          onChange={(event, newValue) => {
            setValueClient(newValue);
          }}
          inputValue={inputValueClient}
          onInputChange={(event, newInputValue) => {
            setInputValueClient(newInputValue);
          }}
          id="controllable-states-demo"
          options={newCompany}
          sx={{
            backgroundColor: "#FFF",
            borderColor: "gray",
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
    </>
  );
};

export default FilterClient;
