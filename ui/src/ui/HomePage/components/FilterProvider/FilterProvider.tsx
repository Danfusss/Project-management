import { ReactNode } from "react";

import FilterDate from "../FilterDate/FilterDate";
import FilterInputName from "../FilterInputName/FilterInputName";
import { CardConfig } from "models/interfaces/cardConfig";

import FilterInputStatus from "../FilterInputStatus/FilterInputStatus";
import FilterLocation from "../FilterLocation/FilterLocation";
import FilterClient from "../FilterClient/FilterClient";
import { Box, Button, Divider, Stack } from "@mui/material";

const FilterProvider = ({
  defaultData,
  children,
  listOfProjects,
}: {
  defaultData: Array<CardConfig>;
  listOfProjects: Array<CardConfig>;
  children: ReactNode;
}) => {
  return (
    <>
      <Box
        width={"22vw"}
        height={"84vh"}
        borderRadius={"0.25rem"}
        bgcolor={"#F1F1F1"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          width={"21.9vw"}
          height={"55vh"}
          marginTop={"1.81rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <FilterInputName />
          <Divider
            sx={{
              borderStyle: "dashed",
              width: "19.5vw",
              borderColor: "primary.main",
            }}
          />
          <Stack
            width={"20.6vw"}
            height={"18.2vh"}
            justifyContent={"space-around"}
          >
            <FilterDate />
            <FilterInputStatus />
          </Stack>
          <Divider
            sx={{
              borderStyle: "dashed",
              width: "19.5vw",
              borderColor: "primary.main",
            }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            width={"20.2vw"}
            height={"11vh"}
          >
            <FilterLocation defaultData={defaultData} />
            <FilterClient defaultData={defaultData} />
          </Box>
          <Divider
            sx={{
              borderStyle: "dashed",
              width: "19.5vw",
              borderColor: "primary.main",
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "10vw",
              height: "3.6vh",
            }}
          >
            Применить
          </Button>
        </Box>
      </Box>
      {children}
    </>
  );
};
export default FilterProvider;
