import { Box, Text, VStack } from "@chakra-ui/react";
import TopCreator from "./TopCreator";

const TopCreators = () => {
  return (
    <Box border="1px solid gray" borderRadius={10} p={2} w={250}>
          <VStack p={2}>
            <Text>Top Creator On This Month</Text>
            <VStack>
                <TopCreator />
            </VStack>
          </VStack>
    </Box>
  )
}

export default TopCreators