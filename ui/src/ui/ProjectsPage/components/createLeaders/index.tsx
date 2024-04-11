import { useState } from "react";
import CreateTasks from "ui/ProjectsPage/CreateTasks";

import { Box, Typography, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const CreateLeaders = () => {
  const [nameLeaders, setNameLeaders] = useState("");
  const [surnameLeaders, setSurnameLeaders] = useState("");
  const [patronymicLeaders, setPatronymicLeaders] = useState("");
  const [work, setWork] = useState("");

  return (
    <>
      <Box>
        <Typography>Создание участника</Typography>
        <Box>
          <Typography>Введите Имя участника</Typography>
          <TextField
            onChange={(e) => setNameLeaders(e.target.value)}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            value={nameLeaders}
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
        </Box>
        <Box>
          <Typography>Введите Фамилию участника</Typography>
          <TextField
            onChange={(e) => setSurnameLeaders(e.target.value)}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            value={surnameLeaders}
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
        </Box>
        <Box>
          <Typography>Введите Отчество участника</Typography>
          <TextField
            onChange={(e) => setPatronymicLeaders(e.target.value)}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            value={patronymicLeaders}
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
        </Box>
        <Box>
          <Typography>Введите должность участника</Typography>
          <TextField
            onChange={(e) => setWork(e.target.value)}
            variant="outlined"
            InputProps={{
              disableUnderline: true,
            }}
            value={work}
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
        </Box>
      </Box>
      <Box>
        <Box
          display={"flex"}
          height={"10.3vh"}
          width={"20.5vw"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"29vw"}
            height={"3.3vh"}
          >
            <Typography variant="body1"> Дата начало </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  views={["month", "year"]}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFF",

                    width: "12.6vw",
                    "& input": {
                      height: "0.3vh",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"26vw"}
            height={"3.3vh"}
          >
            <Typography variant="body1"> Дата конца</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  views={["month", "year"]}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    borderColor: "gray",
                    width: "12.6vw",
                    "& input": {
                      height: "0.3vh",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
      <CreateTasks />
    </>
  );
};

export default CreateLeaders;
