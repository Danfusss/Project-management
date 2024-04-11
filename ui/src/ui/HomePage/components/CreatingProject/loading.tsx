/* eslint-disable react/jsx-max-props-per-line */
import { useRef, useState } from "react";

import { Button } from "@mui/material";
import Preview from "./Preview";

export type Image = {
  name: string;
  size: number;
  src: string | ArrayBuffer | null;
  url?: string;
};

const Loading = () => {
  const [images, setImages] = useState<Image[]>([]);

  const ref = useRef<HTMLInputElement>(null);

  function getImageUrlWithExtension(image: Image) {
    const imageUrl = image.name.split(".").pop()?.toLowerCase();

    switch (imageUrl) {
      case "docx": {
        return {
          ...image,
          url: "C:/Users/Administrator/Desktop/Новая папка/project-manager/src/assets/word.png",
        };
      }
      case "xlsx": {
        return {
          ...image,
          url: "excel.png",
        };
      }
      default: {
        return image;
      }
    }
  }

  const handleSelect = (e: { target: { files: any } }) => {
    const files = [...e.target.files];
    for (const file of files) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const image: Image = {
          name: file.name,
          size: file.size,
          src: reader.result,
        };
        const imageWithUrl = getImageUrlWithExtension(image);
        setImages((prev) => [...prev, imageWithUrl]);
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <>
        <input multiple ref={ref} type="file" onChange={handleSelect} />
        <Button onClick={() => ref.current?.click()}>Выбрать</Button>
        <Button>Загрузить</Button>
      </>
      <>
        <Preview images={images} setImages={setImages} />;
      </>
    </>
  );
};

export default Loading;
