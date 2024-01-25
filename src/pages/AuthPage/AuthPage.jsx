import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <>
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
        {/* Gambar ada di kiri */}
        <Box display={{base:"none",md:"block"}}>
          <Image src="/auth.png" alt="join us" h={490} borderRadius={10} />
        </Box>
        {/* Kolom buat Login/Logup */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
        </VStack>
        </Flex>
      </Container>
    </Flex>
    </>
  );
};

export default AuthPage