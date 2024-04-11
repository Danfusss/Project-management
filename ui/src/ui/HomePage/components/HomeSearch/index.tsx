/* eslint-disable react/jsx-max-props-per-line */
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Popover,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/redux/hooks";
import { CardConfig } from "models/interfaces/cardConfig";
import { useState } from "react";
import { selectInput } from "store/FilterSlice/todoSlice";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CreatingProject from "../CreatingProject";
const HomeSearch = ({
  listOfProjects,
  setTypeCard,
}: {
  listOfProjects: Array<CardConfig>;
  setTypeCard: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [projectInputNumber, setProjectInputNumber] = useState("");

  const number = useAppSelector(selectInput);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      width={"95.5vw"}
      height={"6.38vh"}
      bgcolor={"white"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={"0.25rem"}
    >
      <Box
        width={"47.65vw"}
        height={"3vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box display={"flex"} width={"16vw"}>
          <Typography
            variant="body1"
            fontSize={"1.125rem"}
            lineHeight={"1.125rem"}
            textTransform={"uppercase"}
          >
            список проектов
          </Typography>
          <Typography
            marginLeft={"1rem"}
            variant="body1"
            display={"inline-flex"}
            fontSize={"1.125rem"}
            lineHeight={"1.125rem"}
            textTransform={"uppercase"}
            sx={{ color: "#6678B1" }}
          >{`  ${listOfProjects.length}`}</Typography>
        </Box>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  sx={{
                    marginBottom: "0.25rem",
                  }}
                />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setProjectInputNumber(e.target.value)}
          value={projectInputNumber}
          sx={{
            width: "24.1vw",
            height: "2.3vh",
            borderRadius: "0.25rem",
            border: "1px solid #505050",
            opacity: "0.3 ",
            paddingBottom: "0.25rem",
            backgroundColor: "#FFF",
            "&:hover": {
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            },
          }}
        />
      </Box>
      <Box
        width={"10vw"}
        height={"2vh"}
        display={"flex"}
        justifyContent={"space-between"}
        marginRight={"2rem"}
      >
        <Box
          onClick={() => setTypeCard("Small")}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
            <rect width="10.3103" height="10.3103" fill="#D9D9D9" />
            <rect y="12.6897" width="10.3103" height="10.3103" fill="#D9D9D9" />
            <rect x="12.6897" width="10.3103" height="10.3103" fill="#D9D9D9" />
            <rect
              x="12.6897"
              y="12.6897"
              width="10.3103"
              height="10.3103"
              fill="#D9D9D9"
            />
          </svg>
        </Box>
        <Box
          onClick={() => setTypeCard("Big")}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <svg width="31" height="23" viewBox="0 0 31 23" fill="none">
            <rect width="31" height="10" fill="#D9D9D9" />
            <rect y="13" width="31" height="10" fill="#D9D9D9" />
          </svg>
        </Box>
        <Box>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{ width: "5vw", height: "3vh" }}
          >
            Создать
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            sx={{
              width: "80vw",
              height: "80vh",

              top: "10%",
              left: "10%",
            }}
          >
            <AppBar sx={{ position: "relative", marginBottom: "2rem" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
                  Создание проекта
                </Typography>
              </Toolbar>
            </AppBar>
            <Box>
              <CreatingProject />
            </Box>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSearch;
