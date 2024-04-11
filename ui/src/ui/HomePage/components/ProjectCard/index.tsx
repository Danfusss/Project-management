import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const ProjectCard = (props: CardConfig) => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        width={"44vw"}
        height={"30vh"}
        margin={"2rem"}
        marginTop={"0px"}
        padding={"4vh"}
        borderRadius={"2.3125rem"}
        border={"1px solid #000"}
        sx={{
          background: "#FFF",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 0 17px rgba(0, 0, 0, 0.3)",
          },
        }}
        direction={"column"}
        onClick={() => {
          navigate(`/project-details/${props._id}`);
        }}
      >
        <Stack
          width={"44vw"}
          height={"10vh"}
          direction="row"
          justifyContent="space-between"
        >
          <Stack height={"9vh"} width={"10vw"} justifyContent="flex-end">
            <Typography fontWeight={"600"} variant="subtitle1">
              {`Статус: ${props.status} `}
            </Typography>
          </Stack>
          <Typography fontWeight={"600"} variant="h6" textAlign={"justify"}>
            <b>{`Договор № ${props.number}`}</b>
          </Typography>
          <Stack height={"10vh"} width={"8vw"} direction="column">
            <Typography variant="body2" textAlign={"center"}>
              Трудоемкость: <b>{`${props.time} `}</b>
            </Typography>
            <Typography variant="body2">
              <br />
              {`Дата начала: ${props.startDate} `}
            </Typography>
            <Typography variant="body2">
              {`Дата конца: ${props.endDate} `}
            </Typography>
          </Stack>
        </Stack>
        <Box width={"30vw"} height={"14vh"} paddingTop={"1vh"}>
          <Typography
            variant="body1"
            textAlign={"left"}
          >{`${props.name}`}</Typography>
        </Box>
        <Stack
          width={"45vw"}
          height={"13vh"}
          direction="row"
          justifyContent={"space-between"}
        >
          <Stack
            width={"20vw"}
            height={"10vh"}
            direction="column"
            justifyContent="space-between"
          >
            <Typography variant="body2">
              <b>Индустрия: </b>
              {`${props.industryName}`}
            </Typography>
            <Typography variant="body2">
              <b>Клиент: </b>
              {`${props.clientName} `}
            </Typography>
            <Typography variant="body2">
              <b>Место проекта: г.</b>
              {`${props.city} `}
            </Typography>
          </Stack>
          <Stack
            width={"20vw"}
            height={"11vh"}
            direction="column"
            justifyContent={"flex-end"}
          >
            <Typography variant="body2">Участники:</Typography>
            {props.leaders.map((element, index) => (
              <Typography key={`${element.id}`} variant="body2">
                {`${index + 1}. ${element.name} - ${element.roles} `}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProjectCard;
