import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";

import { CardConfig } from "models/interfaces/cardConfig";

const NumberProject = ({ dataOfProjects }: { dataOfProjects: CardConfig }) => {
  const location = useLocation();
  const isEditing = location.pathname.includes("edit");
  const [projectNumber, setProjectNumber] = useState(dataOfProjects.number);

  return (
    <Box
      width={"94.46vw"}
      height={"6.38vh"}
      bgcolor={"white"}
      display={"flex"}
      alignItems={"center"}
      borderRadius={"0.25rem"}
    >
      <Box
        width={"47.65vw"}
        height={"3vh"}
        display={"flex"}
        alignItems={"center"}
      >
        <Box display={"flex"} width={"16vw"} marginLeft={"4rem"}>
          <Typography
            variant="body1"
            fontSize={"1.125rem"}
            lineHeight={"1.125rem"}
            textTransform={"uppercase"}
          >
            договор
          </Typography>
          {/* <Typography
            variant="body1"
            display={"inline-flex"}
            fontSize={"1.125rem"}
            lineHeight={"1.125rem"}
            textTransform={"uppercase"}
            marginLeft={"0.3rem"}
            sx={{ color: "#6678B1" }}
          >{` ${dataOfProjects.number}`}</Typography> */}
          {isEditing ? (
            <TextField
              variant="standard"
              onChange={(e) => setProjectNumber(e.target.value)}
              value={projectNumber}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      paddingLeft: "1rem",
                      color: "black",
                      fontFamily: "Roboto",
                      fontSize: "0.875rem",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "0.875rem",
                      opacity: "1",
                    }}
                  >
                    ЮБСЛ №
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "20vw",
                height: "2.3vh",
                borderRadius: "4px",
                border: "1px solid #CBCBCB",
                backgroundColor: "#FFF",
              }}
            />
          ) : (
            <Typography
              variant="body1"
              display={"inline-flex"}
              fontSize={"1.125rem"}
              lineHeight={"1.125rem"}
              textTransform={"uppercase"}
              marginLeft={"0.3rem"}
              sx={{ color: "#6678B1" }}
            >{` ${dataOfProjects.number}`}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NumberProject;
