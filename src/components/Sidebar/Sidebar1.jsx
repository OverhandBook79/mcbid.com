import { Avatar, Box, Text, VStack } from "@chakra-ui/react"

const Sidebar1 = () => {
  return (
    <Box border="1px solid gray" borderRadius={10} p={2}>
          <VStack p={2}>
            <Text>Top Creator On This Month</Text>
            <Box id="top-creator1">
              <Avatar />
            </Box>
          </VStack>
    </Box>
  );
};
export default Sidebar1