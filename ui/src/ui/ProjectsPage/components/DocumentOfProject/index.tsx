/* eslint-disable react/jsx-max-props-per-line */
import { Box, Divider, Stack, Typography } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const DocumentOfProject = ({ props }: { props: CardConfig }) => {
  return (
    <Box
      width={"20vw"}
      height={"32vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      bgcolor={"#FFF"}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Box width={"20vw"} height={"2vh"} display={"flex"} alignItems={"center"}>
        <Typography variant="body1" marginLeft={"1rem"} fontSize={"1.25rem"}>
          Официальные документы
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
      <Box height={"20vh"}>
        {" "}
        <Typography variant="body2" marginLeft={"1rem"} fontSize={"1.25rem"}>
          <a href="#">Основной договор</a>
        </Typography>{" "}
        <Typography variant="body2" marginLeft={"1rem"} fontSize={"1.25rem"}>
          <a href="#">Задание по проекту</a>
        </Typography>{" "}
        <Typography variant="body2" marginLeft={"1rem"} fontSize={"1.25rem"}>
          <a href="#">Лист согласования проекта документа</a>
        </Typography>{" "}
        <Typography variant="body2" marginLeft={"1rem"} fontSize={"1.25rem"}>
          <a href="#">План проекта</a>
        </Typography>{" "}
      </Box>
    </Box>
  );
};

export default DocumentOfProject;
