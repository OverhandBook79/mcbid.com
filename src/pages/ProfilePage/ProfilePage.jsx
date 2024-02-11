import { Avatar, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import BottomBar from "../../components/BottomBar/BottomBar";
import TopBar from "../../components/TopBar/TopBar";


const ProfilePage = () => {
  const [isFollow, setIsFollow] = useState(true);
  return (
    <>
    <Flex direction="column">
      <Box position="sticky" top={0} zIndex={1}>
        <TopBar position="sticky" top={0} zIndex={1}/>
      </Box>
      <Flex gap={3} alignItems={"center"}>
      <Avatar size='xl' name='OverhandBook79' src='https://yt3.googleusercontent.com/piAc1Hrdo5vQw0UhedE75STdAK9wUr_3-R6lcfiMQWpzutxL1cOEvW-rtixy9z6MbBEFVHd22g=s176-c-k-c0x00ffffff-no-rj' />
      <VStack align={"left"}>
      <Text fontSize={18} fontWeight="bold" alt='profilename'>OverhandBook79</Text>
      <Text fontSize={16} alt='profiledesc'>The best of indonesian web/modder</Text>
      <Flex fontSize={14} alt='profileinfo' gap={3} alignItems={"center"}>
        <Flex alt='posts' gap={1}>
        <Text>72</Text>
        <Text>Posts</Text>
        </Flex>
        <Flex alt='followers' gap={1}>
        <Text>2.5 M</Text>
        <Text>Followers by Waffen SS</Text>
        </Flex>
        <Flex alt='following' gap={1}>
        <Text>0</Text>
        <Text>Folllowing</Text>
        </Flex>
        <Button onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? "Follow" : "Unfollow"}
        </Button>
      </Flex>
      </VStack>
      </Flex>
      </Flex>
      <BottomBar/>
      </>
  );
};

export default ProfilePage