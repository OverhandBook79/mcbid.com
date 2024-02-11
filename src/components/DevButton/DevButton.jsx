import { Flex } from '@chakra-ui/react';
import { FaGithub, FaYoutube, } from 'react-icons/fa';

const DevButton = () => {
  return (
    <>
    <Flex gap={2}>
      <a href="https://github.com/OverhandBook79" target="_blank" rel="OverhandBook79">
        <FaGithub size={32} />
      </a>
      <a href="https://www.youtube.com/@OverhandBook79" target="_blank" rel="OverhandBook79">
        <FaYoutube size={32} />
      </a>
    </Flex>
    </>
  );
};

export default DevButton;
