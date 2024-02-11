import React from 'react';
import { Avatar, Flex, Image, Text, VStack } from '@chakra-ui/react';

const Contents = () => {
  return (
    <Flex border={'1px gray solid'} p={2}>
      <VStack alignItems={'left'}> 
        <Image src='/post.png'/>
        <Flex gap={2}>
        <Avatar name='OverhandBook79' src='https://yt3.googleusercontent.com/piAc1Hrdo5vQw0UhedE75STdAK9wUr_3-R6lcfiMQWpzutxL1cOEvW-rtixy9z6MbBEFVHd22g=s176-c-k-c0x00ffffff-no-rj' />
        <VStack alignItems={'left'} gap={0}>
        <Text fontSize={16} fontWeight={"bold"}>Tutorial membuat bom atom</Text>
        <Flex gap={1}>
        <Text fontSize={14}>72</Text>
        <Text fontSize={14}>Views</Text>
        </Flex>
        </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Contents;