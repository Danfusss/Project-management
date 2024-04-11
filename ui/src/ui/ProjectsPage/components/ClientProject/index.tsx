/* eslint-disable react/jsx-max-props-per-line */
import { useLocation } from "react-router-dom";

import { Box, Divider, Stack, TextField, Typography } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const ProjectClient = ({ props }: { props: CardConfig }) => {
  const location = useLocation();
  const isEditing = location.pathname.includes("edit");

  return (
    <Box
      width={"20vw"}
      height={"32vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#FFF"}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Box width={"20vw"} height={"2vh"} display={"flex"} alignItems={"center"}>
        <Typography
          component={"div"}
          variant="body1"
          marginLeft={"1rem"}
          fontSize={"1.25rem"}
        >
          Информация о клиенте
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

      <Stack
        width={"16.2vw"}
        height={"6vh"}
        marginLeft={"2rem"}
        justifyContent={"space-around"}
      >
        <Typography variant="body1" component={"div"}>
          Клиент:
          {isEditing ? (
            <TextField
              variant="outlined"
              InputProps={{
                disableUnderline: true,
              }}
              value={props.clientName}
              sx={{
                width: "6vw",
                height: "2.3vh",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                marginLeft: "1.6rem",
                "& .MuiInputBase-root": { height: "2.3vh" },
                "&:focus": {
                  borderColor: "#CBCBCB",
                },
                "&.Mui-focused": {
                  borderColor: "#CBCBCB",
                },
              }}
            />
          ) : (
            <Typography
              variant="body2"
              display={"inline-flex"}
              marginLeft={"1rem"}
              component={"div"}
            >{`${props.clientName}`}</Typography>
          )}
        </Typography>
        <Typography variant="body1" component={"div"}>
          Город:
          {isEditing ? (
            <TextField
              variant="outlined"
              InputProps={{
                disableUnderline: true,
              }}
              value={props.city}
              sx={{
                width: "5vw",
                height: "2.3vh",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                marginLeft: "1.6rem",
                "& .MuiInputBase-root": { height: "2.3vh" },
                "&:focus": {
                  borderColor: "#CBCBCB",
                },
                "&.Mui-focused": {
                  borderColor: "#CBCBCB",
                },
              }}
            />
          ) : (
            <Typography
              variant="body2"
              display={"inline-flex"}
              marginLeft={"1.6rem"}
              component={"div"}
            >{`${props.city}`}</Typography>
          )}
        </Typography>
        <Typography variant="body1" component={"div"}>
          Отрасль:
        </Typography>
        {isEditing ? (
          <TextField
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            value={props.industryName}
            sx={{
              width: "10vw",
              height: "2.3vh",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              marginLeft: "1.6rem",
              "& .MuiInputBase-root": { height: "2.3vh" },
              "&:focus": {
                borderColor: "#CBCBCB",
              },
              "&.Mui-focused": {
                borderColor: "#CBCBCB",
              },
            }}
          />
        ) : (
          <Typography
            variant="body2"
            display={"inline-flex"}
            component={"div"}
          >{`${props.industryName}`}</Typography>
        )}
      </Stack>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "17.5vw",
          borderColor: "primary.main",
        }}
      />
      <Stack
        width={"14.7vw"}
        height={"10vh"}
        marginLeft={"2rem"}
        justifyContent={"space-around"}
      >
        <Typography
          component={"div"}
          variant="body1"
          lineHeight={"line-height: 2.25rem;"}
        >
          Будет больше информации о клиенте
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProjectClient;
