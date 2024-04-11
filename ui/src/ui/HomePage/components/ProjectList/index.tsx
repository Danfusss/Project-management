/* eslint-disable react/jsx-max-props-per-line */
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { CardConfig } from "models/interfaces/cardConfig";
import jsonData from "mock/Project.json";

import FilterProvider from "../FilterProvider/FilterProvider";

import { selectData } from "../../../../store/FilterSlice/dataSlice";
import { useSelector } from "react-redux";
import filterListOfProject from "../../../../store/FilterSlice/filterListOfProject";
import { RootState } from "store/index";
import { useAppSelector } from "hooks/redux/hooks";
import SmallCard from "../SmallCard";
import { Pagination, Stack } from "@mui/material";
import AppBar from "../AppBar";
import Navigation from "../Navigation";
import HomeSearch from "../HomeSearch";
import BigCard from "../BigCard";

const DATA: Array<CardConfig> = jsonData as Array<CardConfig>;

const ProjectList = () => {
  const listOfProjects = useAppSelector(selectData);
  const [filteredProjects, setFilteredProjects] =
    useState<Array<CardConfig>>(listOfProjects);
  const filterValue = useSelector((state: RootState) => state.filters);

  const [typeCard, setTypeCard] = useState("Small");
  const [posts, setPosts] = useState(listOfProjects);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    let count = 0;
    let count2 = 1;
    setPosts(
      filteredProjects.map((el) => {
        count = count + 1;
        if (count === 7) {
          count2 += 1;
          count = 0;
        }

        return { ...el, page: count2 };
      }),
    );

    setPageQty(count2);
    console.log(posts);

    setPosts((oldposts) => oldposts.filter((el) => el.page === page));
  }, [filteredProjects, page]);

  useEffect(() => {
    setFilteredProjects(filterListOfProject(listOfProjects, filterValue));
  }, [filterValue]);

  return (
    <Box
      width={"100vw"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      sx={{
        background: "#D2D2D2",
      }}
    >
      <AppBar />
      <Navigation />
      <Box height={"99.11vh"} width={"96vw"}>
        <Stack
          width={"98.46vw"}
          height={"95.17vh"}
          bgcolor={"white"}
          marginTop={"0.5rem"}
          justifyContent={"space-between"}
          sx={{ background: "#D2D2D2" }}
        >
          <HomeSearch
            setTypeCard={setTypeCard}
            listOfProjects={listOfProjects}
          />
          <Box
            width={"95.5vw"}
            height={"84vh"}
            display={"flex"}
            borderRadius={"0.25rem"}
            bgcolor={"white"}
          >
            <FilterProvider defaultData={DATA} listOfProjects={listOfProjects}>
              <Box
                width={"80vw"}
                height={"67.5vh"}
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
                marginTop={"1rem"}
              >
                {typeCard === "Small"
                  ? posts.map((element) => (
                      <SmallCard key={element._id} {...element} />
                    ))
                  : posts.map((element) => (
                      <BigCard key={element._id} {...element} />
                    ))}
              </Box>
            </FilterProvider>
          </Box>
          <Box
            height={"4vh"}
            width={"95.5vw"}
            bgcolor={"white"}
            borderRadius={"0.25rem"}
          >
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: "0px",
                },
                "& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-selected":
                  {
                    backgroundColor: "#22409A",
                    color: "white",
                  },
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectList;
