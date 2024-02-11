import { Button, Flex, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import { TbDragDrop2 } from 'react-icons/tb';
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // Masukkan konfigurasi firebase Anda di sini
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const storage = firebase.storage();

const CreationForm = () => {
  const inputRef = useRef();
  const [imageFile, setImageFile] = useState(null);
  const [mcFile, setMcFile] = useState(null);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [specification, setSpecification] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropImage = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
      setImageFile(file);
    } else {
      console.log('Please upload an image file (max 5MB).');
    }
  };

  const handleDropMcFile = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && isValidMcFile(file)) {
      setMcFile(file);
    } else {
      console.log('Please upload a valid Minecraft-related file (max 10MB).');
    }
  };

  const isValidMcFile = (file) => {
    const allowedExtensions = ['.mcaddon', '.mcpack', '.mcworld', '.zip'];
    const maxSize = 10 * 1024 * 1024;
    return allowedExtensions.some(ext => file.name.endsWith(ext)) && file.size <= maxSize;
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;
    setUploading(true);
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`posts/${category}/${imageFile.name}`);
    await imageRef.put(imageFile);
    const imageUrl = await imageRef.getDownloadURL();
    console.log('Image uploaded successfully:', imageUrl);
    setUploading(false);
  };

  const handleMcFileUpload = async () => {
    if (!mcFile) return;
    setUploading(true);
    const storageRef = storage.ref();
    const mcFileRef = storageRef.child(`posts/${category}/${mcFile.name}`);
    await mcFileRef.put(mcFile);
    const mcFileUrl = await mcFileRef.getDownloadURL();
    console.log('Minecraft file uploaded successfully:', mcFileUrl);
    setUploading(false);
  };

  const handleSubmit = () => {
    // Submit form data to Firestore here
    console.log('Form data submitted:', {
      category,
      title,
      description,
      features,
      specification,
    });
  };

  return (
    <>
    <Flex direction={'column'} gap={2}>
        <Text fontSize={'bold'}>Title of your creation</Text>
        <Input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <Text fontSize={'bold'}>Category of your creation</Text>
        <Flex gap={2}>
          <Button w={'full'} onClick={() => setCategory('Addon')}>Addon</Button>
          <Button w={'full'} onClick={() => setCategory('World')}>World</Button>
          <Button w={'full'} onClick={() => setCategory('Skin')}>Skin</Button>
        </Flex>
        {/* Image Upload */}
        <Text fontSize={'bold'}>Thumbnail of your creation</Text>
        <Flex justifyContent={'center'} gap={1} p={25} border={"1px gray solid"} borderRadius={5} onDragOver={handleDragOver} onDrop={handleDropImage} w={'full'}>
          {imageFile ? <img src={URL.createObjectURL(imageFile)} alt="Preview" width="150" /> : (
            <VStack>
              <Flex alignItems={"center"} gap={1}>
                <TbDragDrop2 size={25}/>
                <Text fontSize={15} userSelect={"none"}>Drag and Drop Image to Upload</Text>
              </Flex>
              <Flex gap={1}>
                <input 
                  type='file' 
                  onChange={(event) => setImageFile(event.target.files[0])}
                  hidden
                  accept='image/png, image/jpeg, image/jpg'
                  ref={inputRef}
                />
                <Button onClick={() => inputRef.current.click()}>Select Image</Button>
              </Flex>
            </VStack>
          )}
        </Flex>
        {/* Minecraft File Upload */}
        <Text fontSize={'bold'}>File of your creation</Text>
        <Flex justifyContent={'center'} gap={1} p={25} border={"1px gray solid"} borderRadius={5} onDragOver={handleDragOver} onDrop={handleDropMcFile} w={'full'}>
          {mcFile ? <Text>{mcFile.name}</Text> : (
            <VStack>
              <Flex alignItems={"center"} gap={1}>
                <TbDragDrop2 size={25}/>
                <Text fontSize={15} userSelect={"none"}>Drag and Drop Minecraft-related File to Upload</Text>
              </Flex>
              <Flex gap={1}>
                <input 
                  type='file' 
                  onChange={(event) => setMcFile(event.target.files[0])}
                  hidden
                  ref={inputRef}
                />
                <Button onClick={() => inputRef.current.click()}>Select File</Button>
              </Flex>
            </VStack>
          )}
        </Flex>
        {/* Other Inputs */}
        <Text fontSize={'bold'}>Describe your creation</Text>
        <Input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <Text fontSize={'bold'}>Features of your creation</Text>
        <Input placeholder='Features' value={features} onChange={(e) => setFeatures(e.target.value)} />
        <Text fontSize={'bold'}>Specification your creation</Text>
        <Input placeholder='Specification' value={specification} onChange={(e) => setSpecification(e.target.value)} />
        {/* Submit Button */}
        <Button onClick={handleSubmit} disabled={!category || !title || !description || !features || !specification || uploading}>
          {uploading ? 'Uploading...' : 'Post It'}
        </Button>
    </Flex>
    </>
  )
}

export default CreationForm;