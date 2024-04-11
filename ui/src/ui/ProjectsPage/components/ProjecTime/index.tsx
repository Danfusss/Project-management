/* eslint-disable react/jsx-max-props-per-line */
import { useLocation } from "react-router-dom";

import dayjs from "dayjs";

import { Box, Divider, Stack, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { leadersData } from "store/LeadersSlice/dataLeadersSlice";

import { CardConfig } from "models/interfaces/cardConfig";

const ProjectTime = ({ props }: { props: CardConfig }) => {
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
          Информация о проекте
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
          Дата начала проекта:
          <Typography
            variant="body2"
            display={"inline-flex"}
            marginLeft={"1.6rem"}
          />
          {isEditing ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  views={["month", "year"]}
                  value={dayjs(props.endDate, "MM.YYYY")}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    width: "7.6vw",
                    height: "3vh",
                    "& .MuiInputBase-root": {
                      height: "3vh",
                      width: "15vh",
                      overflow: "hidden",
                    },
                    "&.MuiStack-root": {
                      width: "7.6vw",
                    },
                    "& input": {
                      height: "3vh",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          ) : (
            <Typography
              component={"div"}
              variant="body2"
              display={"inline-flex"}
            >
              {props.endDate}
            </Typography>
          )}
        </Typography>
        <Box width={"25vh"} height={"4vh"}>
          <Typography variant="body1" component={"div"}>
            Дата окончания проекта:
            <Typography variant="body2" display={"inline-flex"} />
            {isEditing ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{ width: "17vw" }}
                >
                  <DatePicker
                    views={["month", "year"]}
                    value={dayjs(props.startDate, "MM.YYYY")}
                    sx={{
                      borderRadius: "4px",
                      backgroundColor: "#FFF",
                      width: "7.6vw",
                      height: "3vh",
                      "& .MuiInputBase-root": {
                        height: "3vh",
                        width: "15vh",
                        overflow: "hidden",
                      },
                      "&.MuiStack-root": {
                        width: "7.6vw",
                      },
                      "& input": {
                        height: "3vh",
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            ) : (
              <Typography
                variant="body2"
                display={"inline-flex"}
                component={"div"}
              >{`${props.startDate}`}</Typography>
            )}
          </Typography>
        </Box>
      </Stack>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "17.5vw",
          height: "3vh",
          borderColor: "primary.main",
        }}
      />
      <Stack
        width={"14.7vw"}
        height={"4vh"}
        marginLeft={"2rem"}
        justifyContent={"space-around"}
      >
        <Typography
          component={"div"}
          variant="body1"
          lineHeight={"line-height: 2.25rem;"}
        >
          Трудоемкость:
          <Typography
            variant="body2"
            display={"inline-flex"}
            component={"div"}
          >{`${props.time}`}</Typography>
        </Typography>
        <Typography
          component={"div"}
          variant="body1"
          lineHeight={"line-height: 2.25rem;"}
        >
          будет больше Информации о датах
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProjectTime;
