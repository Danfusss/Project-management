import MUIGrid, { GridProps } from "@mui/material/Grid";
import { forwardRef, Ref } from "react";

export interface GridContainerProps extends GridProps {}

const GridContainer = forwardRef(
  (props: GridContainerProps, ref: Ref<HTMLDivElement> | null) => {
    return <MUIGrid ref={ref} {...props} container />;
  },
);

export default GridContainer;
