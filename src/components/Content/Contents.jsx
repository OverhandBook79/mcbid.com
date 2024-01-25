import React from 'react';
import { Avatar, Flex, Image, Text, VStack } from '@chakra-ui/react';

const Contents = () => {
  return (
    <Flex border={'1px gray solid'} p={2}>
      <VStack alignItems={'left'}> 
        <Image src='/post.png'/>
        <Flex gap={2}>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <VStack alignItems={'left'} gap={0}>
        <Text fontSize={14} fontWeight={"bold"}>Tutorial membuat bom atom</Text>
        <Flex gap={1}>
        <Text fontSize={12}>72</Text>
        <Text fontSize={12}>Views</Text>
        </Flex>
        </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Contents;