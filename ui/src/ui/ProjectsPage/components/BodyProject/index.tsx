import { Box, Stack } from "@mui/material";
import ProjectClient from "../ClientProject";
import ProjectTime from "../ProjecTime";
import DocumentOfProject from "../DocumentOfProject";
import Novoe from "ui/ProjectsPage/Novoe";
import ProjectLeaders from "../ProjectLeaders";

import { CardConfig } from "models/interfaces/cardConfig";

const BodyProject = ({ dataOfProjects }: { dataOfProjects: CardConfig }) => {
  return (
    <Stack
      width={"94.46vw"}
      minHeight={"75vh"}
      bgcolor={"white"}
      alignItems={"center"}
      borderRadius={"0.25rem"}
      justifyContent={"space-around"}
    >
      <Box
        width={"90vw"}
        height={"30vh"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <ProjectClient props={dataOfProjects} />
        <ProjectTime props={dataOfProjects} />
        <DocumentOfProject props={dataOfProjects} />
        <Novoe />
      </Box>
      <Box width={"87.5vw"}>
        <ProjectLeaders />
      </Box>
    </Stack>
  );
};

export default BodyProject;
