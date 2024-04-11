import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProgressBar from "./progressBar";
import { Image } from "./loading";

const Preview = ({
  images,
  setImages,
}: {
  images: Array<Image>;
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}) => {
  function handleDelete(image: Image) {
    setImages((prev) => {
      return prev.filter((_image) => _image.name !== image.name);
    });
  }

  return (
    <>
      <ProgressBar />
      <ImageList sx={{ width: 900, height: 400 }}>
        {images.map((item, index) => (
          <ImageListItem key={index} sx={{ width: "20vw", height: "3vh" }}>
            <img
              style={{ width: "20vw", height: "20vh" }}
              srcSet={item.url || (item.src as string)}
              src={item.url || (item.src as string)}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.name}
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.name}`}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(item);
                    }}
                    sx={{ color: "white" }}
                    aria-label={`star ${item.name}`}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </>
              }
              actionPosition="left"
            />
            <Box
              width={"4vw"}
              height={"2vh"}
              borderRadius={"50px"}
              bgcolor={"blue"}
              position={"absolute"}
              left={"18rem"}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="body2" color={"white"}>
                Загружено
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Preview;
