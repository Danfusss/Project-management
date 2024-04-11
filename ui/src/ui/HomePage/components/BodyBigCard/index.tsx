import { Box, Divider, Stack, Typography } from "@mui/material";

const BodyBigCard = () => {
  return (
    <Box
      width={"70vw"}
      height={"12vh"}
      display={"flex"}
      justifyContent={"space-around"}
    >
      <Box width={"13vw"} display={"flex"} flexDirection={"column"}>
        <Typography variant="body1" width={"13vw"}>
          Город:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.6rem"}
          >
            г.
            {/* {`${} `} */}
          </Typography>
        </Typography>
        <Typography variant="body1" width={"13vw"}>
          Статус:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.2rem"}
          >
            {/* {`${props.status}`} */}
          </Typography>
        </Typography>
        <Typography variant="body1" width={"13vw"}>
          Клиент:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.2rem"}
          >
            {/* {`${props.status}`} */}
          </Typography>
        </Typography>
        <Typography variant="body1" width={"13vw"}>
          Индустрия:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.2rem"}
          >
            {/* {`${props.status}`} */}
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          width: "1vw",
          height: "5vh",
          borderRight: "1px dotted #1976d2",
        }}
      />
      <Box width={"15vw"}>
        <Typography variant="body1">Участники</Typography>
        <Box></Box>
      </Box>
      <Box
        sx={{
          width: "0.1vw",
          height: "6vh",
          borderRight: "1px dotted #1976d2",
        }}
      />
      <Box width={"27.4vw"}>
        <Typography variant="body1">Описание проекта</Typography>
        <Box width={"20vw"}></Box>
      </Box>
    </Box>
  );
};

export default BodyBigCard;
