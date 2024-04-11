/* eslint-disable react/jsx-max-props-per-line */
import { Box, Divider, Stack, Typography } from "@mui/material";

const Novoe = () => {
  return (
    <Box
      width={"20vw"}
      height={"32vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#FFF"}
      alignItems={"center"}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Box width={"20vw"} height={"2vh"} display={"flex"} alignItems={"center"}>
        <Typography variant="body1" marginLeft={"1rem"} fontSize={"1.25rem"}>
          Интеграция
        </Typography>
      </Box>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "17.5vw",
          borderColor: "primary.main",
        }}
      />
      <Stack height={"20vh"} width={"14vw"} alignContent={"center"}>
        <Typography variant={"body2"} color={"#22409A"}>
          ТАСКТРЕКЕР↗️
        </Typography>
      </Stack>
    </Box>
  );
};

export default Novoe;
