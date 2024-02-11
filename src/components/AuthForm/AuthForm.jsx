import { Box, Flex, Image, VStack, Text, Container } from "@chakra-ui/react";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import GoogleAuth from "./GoogleAuth";


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    return (
    <Flex direction={"column"} w={275} gap={5} userSelect={"none"}>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src="/mcbid.png" h={10} width={150} alt="MCBID"/>

            {!isLogin ? <SignUp/> : <SignIn/> }
            
            {/* --------------OR--------------- */}
            <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color="white">
                    OR
                </Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>
            <GoogleAuth/>
        </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have account?" : "Already have an Account?" }
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} cursor={"pointer"} fontSize={14} >
                {isLogin ? "Sign Up" : "Sign In" }
            </Box>
        </Flex>
    </Box>
    </Flex>
  );
};

export default AuthForm