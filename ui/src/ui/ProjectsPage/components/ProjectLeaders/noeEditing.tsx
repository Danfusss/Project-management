import { useRef, useState } from "react";
import { useAppSelector } from "hooks/redux/hooks";
import { leadersData } from "store/LeadersSlice/dataLeadersSlice";

import { Box, Divider, Popover, Stack, Typography } from "@mui/material";

const NotEditing = () => {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent) => {
    setOpen(true);
    anchorEl.current = event.currentTarget as HTMLElement;
  };

  const handlePopoverClose = () => {
    setOpen(false);
  };

  const { leaders } = useAppSelector(leadersData);

  return (
    <>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "83.5vw",
          borderColor: "primary.main",
        }}
      />
      <Stack
        width={"80.2vw"}
        height={"12vh"}
        marginLeft={"2rem"}
        justifyContent={"space-between"}
      >
        <Typography variant="body1">Действующие участники</Typography>
        <Box
          height={"15vh"}
          width={"60vw"}
          display={"flex"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
        >
          {leaders.map((leader, index) => (
            <Typography variant="body2" width={"10vw"} key={index}>
              {leader.name}
            </Typography>
          ))}
        </Box>
      </Stack>
      <Divider
        sx={{
          marginLeft: "1.1rem",
          borderStyle: "dashed",
          width: "83.5vw",
          borderColor: "primary.main",
        }}
      />
      <Stack
        width={"80.2vw"}
        height={"12vh"}
        marginLeft={"2rem"}
        justifyContent={"space-between"}
      >
        <Typography variant="body1">Прекращенные участники</Typography>
        <Box
          height={"15vh"}
          width={"60vw"}
          display={"flex"}
          justifyContent={"space-around"}
          flexWrap={"wrap"}
        >
          {leaders.map((leader, index) => (
            <Box key={index}>
              <Typography
                variant="body2"
                width={"10vw"}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                {leader.name}
              </Typography>
              <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl.current}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  style: {
                    width: "45vw",
                    height: "21vh",
                  },
                }}
                sx={{
                  pointerEvents: "none",
                }}
              >
                <Stack>
                  <Typography variant="body1" marginLeft={"1rem"}>
                    Выполненные работы
                  </Typography>
                  <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                    width={"55vw"}
                    height={"5vh"}
                  >
                    <Stack justifyContent={"space-around"}>
                      <Box width={"23vw"} height={"8vh"} marginLeft={"1rem"}>
                        <Typography variant="body1">
                          Разработка фронтенда
                        </Typography>
                        <Typography variant="body2">
                          Был разработан начальный экран проекта
                        </Typography>
                      </Box>
                      <Divider
                        sx={{
                          marginLeft: "1.1rem",
                          borderStyle: "dashed",
                          width: "20.5vw",
                          borderColor: "primary.main",
                        }}
                      />
                      <Box
                        width={"23vw"}
                        height={"8vh"}
                        marginLeft={"1rem"}
                        marginTop={"1rem"}
                      >
                        <Typography variant="body1">
                          Был разработан дизайн проекта
                        </Typography>
                        <Typography variant="body2">
                          Разработаны шаблоны всех страниц
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack justifyContent={"space-around"}>
                      <Box width={"23vw"} height={"8vh"} marginLeft={"1rem"}>
                        <Typography variant="body1">
                          Был разработан бэкенд проекта
                        </Typography>
                        <Typography variant="body2">
                          Разработан сервер с базой данных на основе експресс и
                          постгресс
                        </Typography>
                      </Box>
                      <Divider
                        sx={{
                          marginLeft: "1.1rem",
                          borderStyle: "dashed",
                          width: "19.5vw",
                          borderColor: "primary.main",
                        }}
                      />
                      <Box
                        width={"23vw"}
                        height={"8vh"}
                        marginLeft={"1rem"}
                        marginTop={"1rem"}
                      >
                        <Typography variant="body1">
                          Разработка презентации
                        </Typography>
                        <Typography variant="body2">
                          Разработана презентация проекта
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Popover>
            </Box>
          ))}
        </Box>
      </Stack>
    </>
  );
};
export default NotEditing;
