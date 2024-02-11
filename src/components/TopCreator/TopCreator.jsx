import { Avatar,  Text, Flex, VStack, Button } from "@chakra-ui/react"
import { useState } from "react";

const TopCreator = () => {
  const [isFollow, setIsFollow] = useState(true);
  return (
    <Flex justify={"space-between"}>
      <Flex>
        <Avatar name="Adolf Hitler"/>
      </Flex>

        {/* pembelah */}
      <Flex>
      <VStack gap={1} p={2}>
        <Text fontSize={15}>Adolf Hitler</Text>
        <Flex gap={2}>
        <Text fontSize={15}>Followers</Text>
        <Text fontSize={15}>100 M</Text>
        </Flex>
      </VStack>
      </Flex>

      {/* pembelah */}

      <Flex>
        <Button onClick={() => setIsFollow(!isFollow)}>{isFollow ? "Follow" : "Unfollow"}</Button>
      </Flex>
    </Flex>
  );
}

export default TopCreator