import MUIGrid, { GridProps } from "@mui/material/Grid";
import { forwardRef, Ref } from "react";

export interface GridItemProps extends GridProps {}

const GridItem = forwardRef(
  (props: GridItemProps, ref: Ref<HTMLDivElement> | null) => {
    return <MUIGrid ref={ref} item {...props} />;
  },
);

export default GridItem;
