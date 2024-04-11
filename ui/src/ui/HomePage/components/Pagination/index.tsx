import { Pagination } from "@mui/material";

const Paginations = () => {
  return (
    <Pagination
      count={10}
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
  );
};

export default Paginations;
