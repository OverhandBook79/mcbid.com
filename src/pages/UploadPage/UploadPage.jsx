import { Flex, VStack } from '@chakra-ui/react'
import TopBar from '../../components/TopBar/TopBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import CreationForm from '../../components/CreationForm/CreationForm';

const UploadPage = () => {
  return (
    <Flex p={2} width={"fit-content"}>
    <VStack>
    <TopBar/>
    <CreationForm/>
    <BottomBar/>
    </VStack>
    </Flex>
  )
}

export default UploadPage