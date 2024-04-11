import { useEffect, useState } from "react";
import { selectEdit, setEdit } from "store/FunctionSlice/funcsionSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const InfoProject = ({ dataOfProjects }: { dataOfProjects: CardConfig }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditing = location.pathname.includes("edit");

  const [nameProject, setNameProject] = useState(dataOfProjects.name);
  const [status, setStatus] = useState(dataOfProjects.status);

  let edit = useAppSelector(selectEdit);
  const dispatch = useAppDispatch();
  const locationEdit = () => dispatch(setEdit(edit));
  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <Box
      width={"94.46vw"}
      height={"11vh"}
      bgcolor={"white"}
      display={"flex"}
      alignItems={"center"}
      borderRadius={"0.25rem"}
    >
      <Box
        width={"70.65vw"}
        height={"7vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginLeft={"4rem"}
      >
        <Box
          display={"flex"}
          width={"10vw"}
          height={"4vh"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            width={"1.7vw"}
            height={"1.85vh"}
            sx={{
              backgroundColor: status === "завершен" ? "#42985F" : "#D9DD20",
            }}
          />
          <Typography variant="body1" lineHeight={"2.25rem"}>
            Статус
          </Typography>
          {isEditing ? (
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                value={status}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="завершен">
                  <em>завершен</em>
                </MenuItem>
                <MenuItem value={20}>в процессе</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <Typography
              variant="body2"
              display={"inline-flex"}
              lineHeight={"1.125rem"}
            >{` ${dataOfProjects.status}`}</Typography>
          )}
        </Box>
        <Box
          width={"50vw"}
          height={"4vh"}
          display={"flex"}
          alignItems={"center"}
        >
          <Typography variant="body1">Наименование</Typography>
          {isEditing ? (
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              value={nameProject}
              onChange={(value) => {
                setNameProject(value.target.value);
              }}
              sx={{
                width: "25vw",
                height: "2.3vh",
                borderRadius: "4px",
                border: "1px solid #CBCBCB",
                backgroundColor: "#FFF",
                marginLeft: "1rem",
              }}
            />
          ) : (
            <Typography
              variant="body2"
              display={"inline-flex"}
              marginLeft={"1rem"}
            >{`${dataOfProjects.name}`}</Typography>
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            edit = "edit";
            locationEdit();
            navigate(`/project-details/edit/${dataOfProjects._id}`);
          }}
        >
          Перейти
        </Button>
        {isEditing ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              navigate(`/project-details/${dataOfProjects._id}`);
            }}
          >
            Выйти
          </Button>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default InfoProject;
