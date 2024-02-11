import { Box, Container, Flex } from "@chakra-ui/react";
import BottomBar from "../../components/BottomBar/BottomBar";
import Contents from "../../components/Content/Contents";
import TopBar from "../../components/TopBar/TopBar";
import Sidebar1 from "../../components/Sidebar/Sidebar1";

const PageLayout = () => {
    return (<>
      <Flex direction="column" p={2}>
      <Box position="sticky" top={0} zIndex={1}>
        <TopBar position="sticky" top={0} zIndex={1}/>
      </Box>
      <Flex gap={2}>
        <Sidebar1 />
      <Flex direction="row" overflowX="scroll" alignItems={"left"} gap={1}>
        <Contents/>
        <Contents/>
        <Contents/>
        <Contents/>
        </Flex>
      </Flex> 
      </Flex>
      <BottomBar/>
      </>
    );
  };
  
  export default PageLayout;