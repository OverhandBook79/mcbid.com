import { Button, Image, Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Button w={"full"} userSelect={"none"} colorScheme="blue" alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src="/google.png" w={5} h={5} alt="Google Logo"/>
        <Text mx='2'>
        Enter with Google
        </Text>
    </Button>
  )
}

export default GoogleAuth