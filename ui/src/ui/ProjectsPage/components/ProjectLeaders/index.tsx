/* eslint-disable react/jsx-max-props-per-line */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import CreateLeaders from "../createLeaders";

import { Box, Button, Drawer, Typography } from "@mui/material";
import CollapsibleTable from "../TableLeaders";
import NotEditing from "./noeEditing";

const ProjectLeaders = () => {
  const location = useLocation();
  const isEditing = location.pathname.includes("edit");
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      width={"87.5vw"}
      height={"33vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#FFF"}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Box width={"20vw"} height={"2vh"} display={"flex"} alignItems={"center"}>
        <Typography variant="body1" marginLeft={"1rem"} fontSize={"1.25rem"}>
          Участники
        </Typography>
        {isEditing ? (
          <>
            <Button onClick={handleDrawerOpen}>Создать Участника</Button>
            <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
              <div style={{ width: "40vw", height: "100%" }}>
                <CreateLeaders />
              </div>
            </Drawer>
          </>
        ) : (
          <></>
        )}
      </Box>
      {isEditing ? <CollapsibleTable /> : <NotEditing />}
    </Box>
  );
};

export default ProjectLeaders;
