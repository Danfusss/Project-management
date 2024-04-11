import { useEffect, useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

interface Tasks {
  appellationTask: string;
  taskStartDate: string;
  taskEndDate: string;
}

const CreateTasks = () => {
  const [createTask, setCreateTask] = useState<Tasks[]>([]);
  const [appellationTask, setAppellationTask] = useState("");
  const [taskStartDate, setTaskStartDate] = useState<Date | null | string>(
    null,
  );
  const [taskEndDate, setTaskEndDate] = useState<Date | null | string>(null);

  useEffect(() => {
    console.log(createTask);
  }, [createTask]);

  return (
    <>
      <Box>
        <Typography>Достигнутые результаты/Выполненные работы</Typography>
        <TextField
          variant="standard"
          multiline
          InputProps={{
            disableUnderline: true,
          }}
          value={appellationTask}
          onChange={(value) => {
            setAppellationTask(value.target.value);
          }}
          sx={{
            width: "25vw",
            height: "4.3vh",
            borderRadius: "4px",
            border: "1px solid #CBCBCB",
            backgroundColor: "#FFF",
            marginLeft: "1rem",
          }}
        />
      </Box>
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
              value={taskStartDate}
              onChange={(e) => {
                setTaskStartDate(e);
              }}
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
        width={"29vw"}
        height={"3.3vh"}
      >
        <Typography variant="body1"> Дата начало </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              views={["month", "year"]}
              value={taskEndDate}
              onChange={(e) => setTaskEndDate(e)}
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
      <Button
        onClick={() => {
          setCreateTask((prevTasks) => [
            ...prevTasks,
            {
              appellationTask,
              taskStartDate: taskStartDate?.toString() || "",
              taskEndDate: taskEndDate?.toString() || "",
            },
          ]);
        }}
      >
        Создать задачу
      </Button>
      {createTask.map((task, index) => {
        return (
          <>
            <Box key={index}>
              <Typography> Задача № {index + 1}</Typography>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default CreateTasks;
