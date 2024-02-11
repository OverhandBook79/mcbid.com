import { Flex, VStack } from '@chakra-ui/react'
import TopBar from '../../components/TopBar/TopBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import CreationForm from '../../components/CreationForm/CreationForm';

const UploadPage = () => {
  return (
    <>
    <Flex direction={'column'} p={2}>
    <TopBar/>
    <CreationForm/>
    <BottomBar/>
    </Flex>
    </>
  )
}

export default UploadPage