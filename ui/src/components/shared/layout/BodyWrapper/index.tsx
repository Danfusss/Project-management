import { Box, BoxProps } from "@mui/material";

interface BodyWrapperProps extends BoxProps {}

const BodyWrapper = (props: BodyWrapperProps) => {
  const {
    boxSizing,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    width,
    height,
    className,
    ...otherProps
  } = props;

  return (
    <Box
      boxSizing={boxSizing ?? "border-box"}
      paddingLeft={paddingLeft ?? "0.5rem"}
      paddingRight={paddingRight ?? "0.5rem"}
      paddingTop={paddingTop ?? "0.5rem"}
      paddingBottom={paddingBottom ?? "0.5rem"}
      width={width ?? "100%"}
      height={height ?? "100%"}
      className={["body-wrapper", className ?? ""].join(" ")}
      {...otherProps}
    >
      {props.children}
    </Box>
  );
};

export default BodyWrapper;
