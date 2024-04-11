import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";
import {
  selectEndData,
  selectStartData,
  setEndData,
  setStartData,
} from "../../../../store/FilterSlice/todoSlice";

import { Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const FilterDate = () => {
  const [enteredProjectStartDate, setProjectStartDate] = useState<Date | null>(
    null,
  );
  const [enteredProjectEndDate, setProjectEndDate] = useState<Date | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const inputStartDate = () =>
    dispatch(setStartData(JSON.stringify(enteredProjectStartDate)));
  const inputEndDate = () =>
    dispatch(setEndData(JSON.stringify(enteredProjectStartDate)));

  useEffect(() => {
    inputStartDate();
  }, [enteredProjectStartDate]);
  useEffect(() => {
    inputEndDate();
  }, [enteredProjectEndDate]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <Box
            display={"flex"}
            height={"10.3vh"}
            width={"20.5vw"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"29vw"}
              height={"3.3vh"}
            >
              <Typography variant="body1"> Время начало </Typography>
              <DatePicker
                views={["month", "year"]}
                value={enteredProjectStartDate}
                onChange={(e) => setProjectStartDate(e)}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  width: "12.6vw",
                  "& input": {
                    height: "0.3vh",
                  },
                }}
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"26vw"}
              height={"3.3vh"}
            >
              <Typography variant="body1"> Конец проекта</Typography>
              <DatePicker
                views={["month", "year"]}
                value={enteredProjectEndDate}
                onChange={(e) => setProjectEndDate(e)}
                sx={{
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  borderColor: "gray",
                  width: "12.6vw",
                  "& input": {
                    height: "0.3vh",
                  },
                }}
              />
            </Box>
          </Box>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default FilterDate;
