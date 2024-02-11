import { Box, Flex } from "@chakra-ui/react";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import { VStack } from "@chakra-ui/react";
import Contents from "../../components/Content/Contents";
import TopCreators from "../../components/TopCreator/TopCreators";
import { TbWorld } from "react-icons/tb";
import { AiOutlineSkin } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box position="sticky" top={0} zIndex={1}>
        <TopBar />
      </Box>
      <Flex direction="column" flex={1} position="sticky"  top={0}>
      {/* pembelah */}
      
      <Flex p={2} gap={2}>
      <Flex display={{md:"block", base:"none"}} >
        <TopCreators />
      </Flex>

      <VStack gap={1} overflowY={"auto"}>
        <Contents categoryicon={<IoExtensionPuzzleOutline />} category={"Addons"}/>
        <Contents categoryicon={<BiWorld />} category={"Worlds"}/>
        <Contents categoryicon={<AiOutlineSkin />} category={"Skins"}/>
        <Contents categoryicon={<TbWorld />} category={"Server"}/>
      </VStack> 
      </Flex>
      {/* pembelah */}
      </Flex>
      <Box position="sticky" bottom={0} zIndex={1}>
        <BottomBar />
      </Box>
    </Flex>
  );
};

export default HomePage;
