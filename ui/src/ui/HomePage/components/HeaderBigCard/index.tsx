import { Box, Divider, Typography } from "@mui/material";
import { CardConfig } from "models/interfaces/cardConfig";

const HeaderBigCard = ({
  status,
  number,
  time,
}: {
  status: string;
  number: string;
  time: string;
}) => {
  return (
    <Box width={"67vw"}>
      <Box
        width={"67vw"}
        height={"2vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          width={"20vw"}
          height={"2vh"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box
            width={"1.7vw"}
            height={"1.85vh"}
            sx={{
              backgroundColor: status === "завершен" ? "#42985F" : "#D9DD20",
            }}
          />
          <Typography variant="body1" marginLeft={"1rem"} fontSize={"1.25rem"}>
            {`Договор № ${number}`}
          </Typography>
        </Box>
        <Typography variant="body1" width={"10vw"}>
          Трудоемкость:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.6rem"}
          >
            г.
            {`${time} `}
          </Typography>
        </Typography>
        <Divider
          sx={{
            borderStyle: "dashed",
            width: "1vw",
            borderColor: "primary.main",
            transform: "rotate(90deg)",
          }}
        />
        <Box width={"24vw"} height={"3vh"}>
          <Box
            width={"13vw"}
            height={"3vh"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography>
              Время начало
              <Typography display={"inline-block"}>{time}</Typography>
            </Typography>
            <Typography>
              Время конца:
              <Typography display={"inline-block"}>{time}</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBigCard;
