import { Box, Flex } from "@chakra-ui/react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Contents from "../../components/Content/Contents";
import TopBar from "../../components/TopBar/TopBar";

const PageLayout = () => {
    return (
      <Flex direction="column" h="100vh">
      <Box position="sticky" top={0} zIndex={1}>
        <TopBar position="sticky" top={0} zIndex={1}/>
      </Box>
      <Flex direction="column" overflowY="auto" alignItems={"center"} >
        <Flex direction="row" overflowX="auto" gap={2}>  
        <Contents />
        <Contents />
        <Contents />
        <Contents />
        </Flex>
        <BottomBar />
      </Flex>
      </Flex>
    );
  };
  
  export default PageLayout;