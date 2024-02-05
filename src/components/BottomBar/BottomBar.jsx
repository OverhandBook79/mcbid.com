import { Text, Flex } from "@chakra-ui/react";
import DevButton from "../DevButton/DevButton";

const BottomBar = () => {
    return (
      <Flex p={2} gap={2} bg="black.100" alignItems={"center"} justifyContent={"center"}>
        <Text color="white">Dibuat Oleh OverhandBook79</Text>
        <DevButton />
      </Flex>
    );
};

export default BottomBar