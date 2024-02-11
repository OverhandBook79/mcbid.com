import { Box, Button, Flex, Image, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const toast = useToast()
    const [inputs, setInputs] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const handleAuth = () => {
        if (!inputs.username || !inputs.email || !inputs.password) {
            toast({
                title: "Failed",
                description: "Please fill all the blank",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            })
            return
        };
        if (inputs.username || inputs.email || inputs.password) {
            toast({
                title: "Success",
                description: "Your account will be saved",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
              })
            navigate("/");
        };
        
    };
    return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src="/mcbid.png" h={10} width={150} cursor={'Pointer'} alt="MCBID"/>
            <Input 
                placeholder="Username"
                fontSize={14}
                type="text"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs,username:e.target.value})}
            />
            <Input 
                placeholder="Email"
                fontSize={14}
                type="email"
                value={inputs.email}
                onChange={(e) => setInputs({...inputs,email:e.target.value})}
            />
            <Input 
                placeholder="Password"
                fontSize={14}
                type="password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs,password:e.target.value})}
            />

            {!isLogin ? <Input placeholder="Confirm Password" fontSize={14} type="password" /> : null}

            <Button w={"full"} colorScheme="blue" size={'sm'} fontSize={14} onClick={handleAuth}>
                {isLogin ? "Sign In" : "Sign Up"}
            </Button>
            
            {/* --------------OR--------------- */}
            <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color="white">
                    OR
                </Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>

            <Flex cursor={"pointer"} alignItems={"center"}>
                <Image src="/google.png" w={5} alt="Google Logo"/>
                <Text mx='2' color={'blue.500'}>
                {isLogin ? "Sign In with Google" : "Sign Up with Google"}
                </Text>
            </Flex>
        </VStack>
    </Box>

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have account?" : "Already have an Account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "Sign Up" : "Sign In"}
            </Box>
        </Flex>
    </Box>
    </>
  );
};

export default AuthForm