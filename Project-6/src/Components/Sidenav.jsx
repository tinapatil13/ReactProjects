import { HStack, Heading, Icon, Stack, Box, Text } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineThumbsUpDown } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import {Link, useLocation} from "react-router-dom";

const Sidenav = () => {

  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: MdOutlineThumbsUpDown,
      text: "Transactions",
      link: "/transactions",
    },
  
  ];

  return (
    //  <Box
    //   sementic tag
    //  as="aside"
    //  Media query
    //  px={{
    //     base:"4",
    //     md:"8",
    //     xl:"16",
    //  }}
    //  >Sidenav</Box>

    // stack: flex, flex-direction-col
    // hstack: flex align-items-center
    <Stack
    justify="space-between"
      boxShadow={
        {base:"none", lg:"xl"}
      }
     w={{
        base:"full",
        lg:"16rem"
     }}
      h="100vh"
      bg="white"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          @DOSOMECODE
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack

               borderRadius="10px"
               py="3"
               px="4"
               _hover={{
                 bg: "#F3F3F7",
                 color: "#171717",
               }}
           
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px">{nav.text}</Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Link to="/support">
      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{ bg: "#F3F3F7", color: "#171717" }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
      </Link>
    </Stack>
  );
};

export default Sidenav;
