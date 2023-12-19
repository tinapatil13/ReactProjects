import {
  Button,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
const PriceSection = () => {
  const timestamps = ["6:15 PM", "7:15 PM", "8:15 PM", "9:15 PM", "10:15 PM"];
  return (
    <CustomCard>
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={3}
            align={{ base: "flex-start", sm: "center" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Text textStyle="h2" fontWeight="medium">
              ₹26,670.25
            </Text>

            <HStack fontWeight="medium" color="green.500">
              <Icon as={MdArrowOutward}></Icon>
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={FaPlus} />}>Deposit</Button>
          <Button leftIcon={<Icon as={TiMinus} />}>Withdraw</Button>
        </HStack>
      </HStack>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
      </Tabs>
      <Image w="100%" src="/graph.png"></Image>
      <HStack justify="space-between" mt="48px">
        {timestamps.map((timestamp) => (
          <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
