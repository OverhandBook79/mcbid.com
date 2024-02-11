import { Box, Flex } from "@chakra-ui/react";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import { VStack } from "@chakra-ui/react";
import Contents from "../../components/Content/Contents";
import TopCreators from "../../components/TopCreator/TopCreators";

const WorldsPage = () => {
    return (
        <Flex direction="column" minHeight="100vh">
          <Box position="sticky" top={0} zIndex={1}>
            <TopBar />
          </Box>
          <Flex direction="column" flex={1}>
          {/* pembelah */}
          <Flex direction="column" p={2}>
          <Flex gap={2}>
          <Flex display={{md:"block", base:"none"}}>
            <TopCreators />
          </Flex>
          <VStack gap={1}>
            <Contents categoryicon={null} category={"Populer"}/>
            <Contents categoryicon={null} category={"Newest"}/>
            <Contents categoryicon={null} category={"Oldest"}/>
            <Contents categoryicon={null} category={"All"}/>
          </VStack> 
          </Flex>
          </Flex>
          {/* pembelah */}
          </Flex>
          <Box position="sticky" bottom={0} zIndex={1}>
            <BottomBar />
          </Box>
        </Flex>
      );
    };
    
export default WorldsPage;
