import { Text, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import DevButton from "../DevButton/DevButton";

const BottomBar = () => {
  return (
    <>
    <Flex
      p={2}
      gap={2}
      bg="black"
      alignItems={"center"}
      justifyContent={"center"}
      minWidth={"320"} maxWidth={"2560px"}
    >
      <Text color="white">Created By OverhandBook79</Text>
      <Flex gap={2}>
        <DevButton />
      </Flex>
    </Flex>
    </>
  );
};

export default BottomBar;
