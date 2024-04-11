import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/hooks";
import { selectData } from "../../store/FilterSlice/dataSlice";

import { Box, Stack } from "@mui/material";
import AppBar from "ui/HomePage/components/AppBar";
import Navigation from "ui/HomePage/components/Navigation";
import NumberProject from "./components/NumberProject";
import InfoProject from "./components/InfoProject";
import BodyProject from "./components/BodyProject";

import { CardConfig } from "models/interfaces/cardConfig.js";

const ProjectDetails = () => {
  const [dataOfProjects, setDataOfProjects] = useState<
    CardConfig | undefined
  >();
  const params = useParams();
  const current = params["id"];
  const DATA = useAppSelector(selectData);
  useEffect(() => {
    if (current) {
      setDataOfProjects(DATA.find((element) => element._id === current));
    }
  }, [params]);
  if (dataOfProjects === undefined) {
    return <Box>loading</Box>;
  }

  return (
    <Box
      width={"100vw"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      sx={{
        background: "#D2D2D2",
      }}
    >
      <AppBar />
      <Navigation />
      <Box height={"99.11vh"} width={"95.46vw"}>
        <Stack
          width={"98.46vw"}
          height={"95.17vh"}
          bgcolor={"white"}
          marginTop={"0.5rem"}
          justifyContent={"space-evenly"}
          sx={{ background: "#D2D2D2" }}
        >
          <NumberProject dataOfProjects={dataOfProjects} />
          <InfoProject dataOfProjects={dataOfProjects} />
          <BodyProject dataOfProjects={dataOfProjects} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
