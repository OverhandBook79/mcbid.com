import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';

const ProfilePage = () => {
  return (
    <>
    <Flex p={2}>
      <Flex gap={2} alignItems={"center"}>
      <Image alt='profilepic' borderRadius='full' boxSize='130px' src='/google.png'/>
      <VStack align={"left"}>
      <Text fontSize={18} fontWeight="bold" alt='profilename'>OverhandBook79</Text>
      <Text fontSize={16} alt='profiledesc'>The best of indonesian web/modder</Text>
      <Flex fontSize={14} lt='profileinfo' gap={3} alignItems={"center"}>
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
        <Button>
            Follow
        </Button>
      </Flex>
      </VStack>
      </Flex>
      
    </Flex>
    </>
  )
}

export default ProfilePage