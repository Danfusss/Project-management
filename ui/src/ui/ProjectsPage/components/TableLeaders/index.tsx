import * as React from "react";
import { useEffect, useState } from "react";

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { leadersData } from "store/LeadersSlice/dataLeadersSlice";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";

import { CreateLeaders } from "models/interfaces/createLeaders";
// function createLeaders(
//   name: string,
//   startDate: string,
//   endDate: string,
//   post: string,
//   tasks: Array<string>,
// ) {
//   return {
//     name,
//     startDate,
//     endDate,
//     tasks,
//   };
// }

function Row({
  name: initialName,
  startDate: initialStartDate,
  endDate: initialEndDate,
  post: initialPost,
  tasks: initialTasks,
}: CreateLeaders) {
  const [open, setOpen] = React.useState(false);

  const [nameLeaders, setNameLeaders] = useState(initialName);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [postLeaders, setPostLeaders] = useState(initialPost);
  const [tasksLeaders, setTaskLeaders] = useState(initialTasks);

  const dispatch = useAppDispatch();
  // const inputName = () => dispatch(setName(row.name));

  // const inputStartDate = () => dispatch(setStartDate(valueStartDate));
  // const inputEndDate = () => dispatch(setEndDate(valueEndDate));
  // const inputPost = () => dispatch(setPost(valuePost));

  // useEffect(() => {
  //   console.log(startDate);
  // }, []);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <TextField
            value={nameLeaders}
            onChange={(e) => setNameLeaders(e.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          <TextField
            value={postLeaders}
            onChange={(e) => setPostLeaders(e.target.value)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Выполненные работы
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Дата</TableCell>
                    <TableCell> Наименование выполненной работы</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {initialTasks.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        <TextField
                          value={historyRow.date}
                          // onChange={(e) =>
                          //   setProjectInputNumber(e.target.value)
                          // }
                        />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <TextField
                          size="small"
                          value={historyRow.description}
                          onChange={(e) => setPostLeaders(e.target.value)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createLeaders("Frozen yoghurt", 159, 6, 24),
//   createData("Ice cream sandwich", 237, 9, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16, 24, 6, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable() {
  // React.useEffect(() => {
  //   console.log(data);
  // }, []);

  const { leaders } = useAppSelector(leadersData);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ФИО сотрудника</TableCell>
            <TableCell align="right">Дата начала работы</TableCell>
            <TableCell align="right">Дата конца работы</TableCell>
            <TableCell align="right">Должность</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaders.map((row) => (
            <Row key={row.name} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
