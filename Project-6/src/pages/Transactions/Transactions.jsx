import {
  Button,
  Card,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Tag,
  Input,
  HStack
} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { CiSearch } from "react-icons/ci";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 348,
    },
    {
      name: "Deposit",
      count: 898,
    },

    {
      name: "Withdraw",
      count: 948,
    },

    {
      name: "Trade",
      count: 248,
    },
  ];
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="4">
        <Tabs>
          <TabList py="4" display="flex"  justifyContent="space-between">
          <HStack>
          {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
          </HStack>

            <InputGroup maxW="200px" pb="2" pr="2">
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch}/>
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            '
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
      
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
