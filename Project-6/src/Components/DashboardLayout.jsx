import { Flex, Box, Container, useDisclosure } from '@chakra-ui/react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer';

const DashboardLayout = ({title, children}) => {
    //useDisclosure is the hook which contain 3 properties isOpen, onClose, onOpen
    const {isOpen, onClose, onOpen}=useDisclosure();
  return (
    <Flex>
        
         <Box
           display={
            { base: "none", lg: "flex" } 
           //In  small screen sidebar should be hide
          }
          >
          <Sidenav/>
         </Box>
       <SideDrawer isOpen={isOpen} onClose={onClose}/>
       <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen}/>
          <Container overflow="hidden" overflowY="auto" h="calc(100vh-88px)" mt="6"maxW="70rem" 
           px="4">{children}</Container>
       </Box>
       <Box>

       </Box>
       </Flex>
  )
}

export default DashboardLayout