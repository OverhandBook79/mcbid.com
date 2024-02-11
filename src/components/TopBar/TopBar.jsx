import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, Input, InputGroup, InputRightElement, Image } from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { IoLogOutOutline, IoSettingsOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import { TbBrandMinecraft } from "react-icons/tb";
import { AiOutlineSkin } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const TopBar = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/")
  };
  const logout = () => {
    navigate("/auth")
  };
  const auth = () => {
    navigate("/auth")
  };
  const profile = () => {
    navigate("/profile")
  };
  const addons = () => {
    navigate("/addons")
  };
  const worlds = () => {
    navigate("/worlds")
  };
  const skins = () => {
    navigate("/skins")
  };
  const servers = () => {
    navigate("/servers")
  };
  const {pathname} = useLocation()
  return (
    <>
    <Flex p={5} bg="black" justifyContent="space-between" alignItems="center" gap={5} minWidth={"320"} maxWidth={"2560px"}>
      <Image src="/mcbid.png" alt="Logo" h="50px" onClick={home}/>
      
      <InputGroup>
        <Input placeholder="Search" />
        <InputRightElement children={<SearchIcon color="whiteAlpha.500" />} />
      </InputGroup>

      <Menu>
        <Flex>
            <MenuButton as={Button} color={'whiteAlpha.800'}>
              <RiAccountCircleLine /> 
                <Flex gap={1} alignItems={"center"}>
                  Account
                  <ChevronDownIcon/>
                </Flex>
            </MenuButton>
        </Flex>
        <MenuList color={'whiteAlpha.800'}>
          <>
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
          </>
        </MenuList>
      </Menu>

      <Menu>
        <Flex>  
            <MenuButton as={Button} color={'whiteAlpha.800'}>
              <TbBrandMinecraft />  
              <Flex alignItems={"center"} gap={1}>
                Creation
                <ChevronDownIcon/>
              </Flex>
            </MenuButton>
        </Flex>
        <MenuList>
          <MenuItem onClick={addons} as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Addon
              <IoExtensionPuzzleOutline />
            </Flex>
          </MenuItem>
          <MenuItem onClick={worlds} as={Button}>
            <Flex alignItems={"center"} gap={1}>
              World
              <BiWorld />
            </Flex>
          </MenuItem>
          <MenuItem onClick={skins} as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Skins
              <AiOutlineSkin />
            </Flex>
          </MenuItem>
          <MenuItem onClick={servers} as={Button}>
            <Flex alignItems={"center"} gap={1}>
              Server
              <TbWorld />
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    </>
  );
};

export default TopBar