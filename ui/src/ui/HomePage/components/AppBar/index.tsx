import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Logo from "assets/logo";

const AppBar = () => {
  return (
    <Box
      width={"100vw"}
      height={"4vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
    >
      <Box
        display={"flex"}
        width={"98vw"}
        height={"4vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={"20vw"}>
          <Logo />
        </Box>
        <Box width={"4vw"} height={"1.8vh"}>
          <AccountCircleIcon />
          <NotificationsIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
