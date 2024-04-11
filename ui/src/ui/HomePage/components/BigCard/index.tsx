import { Box, Stack } from "@mui/material";
import { CardConfig } from "models/interfaces/cardConfig";
import HeaderBigCard from "../HeaderBigCard";
import BodyBigCard from "../BodyBigCard";

const BigCard = (props: CardConfig) => {
  return (
    <Stack
      width={"67vw"}
      height={"17vh"}
      sx={{
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box>
        <Box>
          <HeaderBigCard
            status={props.status}
            number={props.number}
            time={props.time}
          />
        </Box>
        <Box
          sx={{
            width: "67vw",
            height: "1vh",
            borderTop: "1px dotted #1976d2",
          }}
        />
        <BodyBigCard />
      </Box>
    </Stack>
  );
};

export default BigCard;
