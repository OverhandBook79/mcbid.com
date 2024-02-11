import { Button, Flex, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState, useRef } from 'react'
import { TbDragDrop2 } from 'react-icons/tb';

const UploadImage = () => {
  const inputRef = useRef();
  const [files, setFiles] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    console.log(Array.from(event.dataTransfer.files))
    setFiles(event.dataTransfer.files)
  };
  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
  };
  if (files) return (
    <VStack>
      <VStack>
        {Array.from(files).map((files, idx) => <li key={idx}>File</li> )}
      </VStack>
      <Flex>
        <Button onClick={() => setFiles(null)}>Cancel</Button>
        <Button onClick={handleUpload}>Upload</Button>
      </Flex>
    </VStack>
  );

  return (
    <>
      <Flex gap={1} p={40} border={"1px gray solid"} borderRadius={5} onDragOver={handleDragOver} onDrop={handleDrop}>
        <VStack>
        <Flex alignItems={"center"} gap={1}>
        <TbDragDrop2 size={25}/>
        <Text userSelect={"none"}>Drag and Drop Files to Upload</Text>
        </Flex>
        <Flex gap={1}>
        <input 
        type='file' 
        multiple 
        onChange={(event) => setFiles(event.target.files)}
        hidden
        accept='image/png, image/jpeg, image/jpg'
        ref={inputRef}
        />
        <button onClick={() => inputRef.current.click()}>Select Files</button>
        </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default UploadImage