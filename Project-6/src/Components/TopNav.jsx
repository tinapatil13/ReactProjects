import {
  HStack,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniBars4 } from "react-icons/hi2";

const TopNav = ({title, onOpen}) => (
  <Box>
    <HStack boxShadow="xl" h="16" px="65"
      justify="space-between"  mx="auto" bg="white">
        <Icon as={HiMiniBars4} fontSize="28px" onClick={onOpen}
        display={
          {base:"block",
            lg:"none"}
        }/>
      <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
      <Menu>
        <MenuButton>
          <Icon as={FaCircleUser} fontSize="35px"></Icon>
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Log In</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Support</MenuItem>

        </MenuList>
      </Menu>
    </HStack>
  </Box>
  
);

export default TopNav;
