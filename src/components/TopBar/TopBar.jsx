import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, Input, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoLogOutOutline, IoSettingsOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { TbBrandMinecraft } from "react-icons/tb";
import { AiOutlineSkin } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const TopBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobile = windowWidth <= 676; // ATUR UKURAN LAYARNYA DISINI //
  const navigate = useNavigate();
  const logout = () => {
    navigate("/auth")
  }
  const profile = () => {
    navigate("/profile")
  }
  return (
    <Flex p={5} bg="black.100" justifyContent="space-between" alignItems="center" gap={5}>
      <Image src={isMobile ? "/mcbidicon.png" : "/mcbid.png"} alt="Logo" h="50px" />
      
      <InputGroup>
        <Input placeholder="Search" />
        <InputRightElement children={<SearchIcon color="whiteAlpha.500" />} />
      </InputGroup>

      <Menu>
        <Flex>
            <MenuButton as={Button} color={'whiteAlpha.800'}>
              {isMobile ? <RiAccountCircleLine /> : 
                <Flex gap={1} alignItems={"center"}>
                  Account
                  <ChevronDownIcon/>
                </Flex>}
            </MenuButton>
        </Flex>
        <MenuList color={'whiteAlpha.800'}>
          <MenuItem onClick={profile} as={Button}>
          <Flex alignItems={'center'} gap={1}>
          Settings <IoSettingsOutline mx='2px'/>
          </Flex>
          </MenuItem>
          <MenuItem onClick={logout} as={Button}>
          <Flex alignItems={'center'} gap={1}>
              Sign Out <IoLogOutOutline mx='2px' />
          </Flex>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <Flex>  
            <MenuButton as={Button} color={'whiteAlpha.800'}>
              {isMobile ? <TbBrandMinecraft /> : 
              <Flex alignItems={"center"} gap={1}>
                Creation
                <ChevronDownIcon/>
              </Flex>}
            </MenuButton>
        </Flex>
        <MenuList>
          <MenuItem as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Addon
              <IoExtensionPuzzleOutline />
            </Flex>
          </MenuItem>
          <MenuItem as={Button}>
            <Flex alignItems={"center"} gap={1}>
              World
              <BiWorld />
            </Flex>
          </MenuItem>
          <MenuItem as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Skins
              <AiOutlineSkin />
            </Flex>
          </MenuItem>
          <MenuItem as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Server
              <TbWorld />
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TopBar