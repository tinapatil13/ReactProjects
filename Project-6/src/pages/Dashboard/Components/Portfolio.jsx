import { HStack, Stack ,Text, Icon, Tag, Button} from '@chakra-ui/react'
import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";


const Portfolio = () => {
  return (
  <HStack justify="space-between" bg="white"
   borderRadius="xl" p="6" spacing={16}
   align={{base:"flex-start", xl:"center"}}
   flexDirection={
    {base:"column", xl:"row"}
   }>
    <Stack>
        <HStack color="black.80">
        <Text fontSize="sm">Total Portfolio Value</Text>
        <Icon as={HiInformationCircle}></Icon>
        </HStack>
        <Text textStyle="h2" fontWeight="medium">₹ 112,312.34</Text>
    </Stack>
    <Stack>
        <HStack color="black.80">
        <Text fontSize="sm">Wallet Balancess</Text>
         </HStack>
         <HStack spacing={3}
        align={{base:"flex-start", sm:"center"}}
        flexDirection={
         {base:"column", sm:"row"}
        } >
          
        <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
        <Tag colorScheme="gray">BTC</Tag>
        
          <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text>
          <Tag colorScheme="gray">INR</Tag>
        
        </HStack>
    </Stack>

    <HStack>
      <Button leftIcon={<Icon as={FaArrowCircleDown}/>} >Deposit</Button>
      <Button leftIcon={<Icon as={FaArrowCircleUp}/>}>Withdraw</Button>
    </HStack>
   
  </HStack>
  )
}

export default Portfolio