import { Box, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import HouseIcon from "@mui/icons-material/House";
import ListIcon from "@mui/icons-material/List";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import SettingsIcon from "@mui/icons-material/Settings";
const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box width={"3.5vw"} height={"98vh"} bgcolor={"#22409A"}>
      <Stack
        marginTop={"1.5rem"}
        width={"3vw"}
        height={"22vh"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => {
            navigate(`/`);
          }}
        >
          <HouseIcon
            sx={{
              width: "2rem",
              height: "1.87569rem",
              color: "white",
            }}
          />
        </IconButton>
        <ListIcon
          sx={{ width: "2rem", height: "1.87569rem", color: "white" }}
        />
        <AccessTimeIcon
          sx={{ width: "2rem", height: "1.87569rem", color: "white" }}
        />
        <RecentActorsIcon
          sx={{ width: "2rem", height: "1.87569rem", color: "white" }}
        />
        <SettingsIcon
          sx={{ width: "2rem", height: "1.87569rem", color: "white" }}
        />
      </Stack>
    </Box>
  );
};

export default Navigation;
