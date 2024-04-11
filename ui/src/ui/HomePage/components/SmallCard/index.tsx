/* eslint-disable react/jsx-max-props-per-line */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { Box, Divider, Stack } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const SmallCard = (props: CardConfig) => {
  const navigate = useNavigate();
  const status = props.status;
  useEffect(() => {
    console.log(props.status);
  }, []);

  return (
    <Box
      width={"23vw"}
      height={"32vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      bgcolor={"#FFF"}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
      onClick={() => {
        navigate(`/project-details/${props._id}`);
      }}
    >
      <Box width={"20vw"} height={"2vh"} display={"flex"} alignItems={"center"}>
        <Box
          width={"1.7vw"}
          height={"1.85vh"}
          sx={{
            backgroundColor:
              props.status === "завершен" ? "#42985F" : "#D9DD20",
          }}
        />
        <Typography variant="body1" marginLeft={"1rem"} fontSize={"1.25rem"}>
          {`Договор № ${props.number}`}
        </Typography>
      </Box>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "21vw",
          borderColor: "primary.main",
        }}
      />

      <Stack
        width={"13vw"}
        height={"6vh"}
        marginLeft={"2rem"}
        justifyContent={"space-around"}
      >
        <Typography variant="body1">
          Город:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.6rem"}
          >
            г.
            {`${props.city} `}
          </Typography>
        </Typography>
        <Typography variant="body1">
          Статус:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.2rem"}
          >{`${props.status}`}</Typography>
        </Typography>
        <Typography variant="body1">
          Клиент:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1rem"}
          >{`${props.clientName}`}</Typography>
        </Typography>
      </Stack>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "21vw",
          borderColor: "primary.main",
        }}
      />
      <Stack
        width={"14.7vw"}
        height={"10vh"}
        marginLeft={"2rem"}
        justifyContent={"space-between"}
      >
        <Typography variant="body1" lineHeight={"line-height: 2.25rem;"}>
          Участники
        </Typography>
        <Stack height={"14vh"} justifyContent={"space-around"}>
          {props.leaders.map((element, index) => (
            <Typography key={index} variant="body2" lineHeight={"1.125rem"}>
              {`${element.name} `}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SmallCard;
