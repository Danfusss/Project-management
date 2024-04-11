import { useEffect, useState } from "react";

import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";
import {
  selectStatus,
  setStatus,
} from "../../../../store/FilterSlice/todoSlice";

const FilterInputStatus = () => {
  const [statusFilter, setStatusFilter] = useState<Array<string>>([]);

  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const inputLocation = () => dispatch(setStatus(statusFilter));

  useEffect(() => {
    inputLocation();
  }, [statusFilter]);

  return (
    <Box
      width={"21vw"}
      height={"3.3vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="body1">Статусы</Typography>
      <Box width={"13vw"} display={"flex"} justifyContent={"space-between"}>
        <FormControlLabel
          control={
            <Checkbox
              checked={statusFilter.includes("в процессе")}
              value={"в процессе"}
              onChange={(e) => {
                if (e.target.checked) {
                  setStatusFilter([...statusFilter, e.target.value]);
                } else {
                  setStatusFilter(
                    statusFilter.filter((el) => el !== e.target.value),
                  );
                }
              }}
              sx={{
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label="В процессе"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={statusFilter.includes("завершен")}
              value={"завершен"}
              onChange={(e) => {
                if (e.target.checked) {
                  setStatusFilter([...statusFilter, e.target.value]);
                } else {
                  setStatusFilter(
                    statusFilter.filter((el) => el !== e.target.value),
                  );
                }
              }}
              sx={{
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
          }
          label="Завершен"
        />
      </Box>
    </Box>
  );
};

export default FilterInputStatus;
