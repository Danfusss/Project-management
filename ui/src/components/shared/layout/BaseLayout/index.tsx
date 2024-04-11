import GridContainer from "components/core/layouts/Grid/GridContainer";
import GridItem from "components/core/layouts/Grid/GridItem";
import RouterWrapper from "ui/router";

const BaseLayout = () => {
  return (
    <GridContainer
      className={"project-root"}
      flexDirection={"column"}
      width={"100vw"}
      height={"100vh"}
      flexWrap={"nowrap"}
      overflow={"hidden"}
    >
      <GridItem flex={"1 0 content"}>
        <RouterWrapper />
      </GridItem>
    </GridContainer>
  );
};

export default BaseLayout;
