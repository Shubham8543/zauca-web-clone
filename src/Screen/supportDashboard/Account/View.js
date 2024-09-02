import {
  Box,
  Flex,
  HStack,
  Text,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Select,
  FormLabel,
  Card,
  CardBody,
  CardFooter,
  Heading,
  VStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import { RxIdCard } from "react-icons/rx";

function View() {
  return (
    <>
      <Navbar />
      <Flex
        justifyContent={"center"}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        w={"100%"}
      >
        <Box w={"100% "} pt={10}>
          <Text borderBottom={"1px"} fontSize={30}>
            Review & Checkout
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} pt={5} w={'100%'}>
        <Box
          border={"1px"}
          w={600}
          h={10}
          bg={"#072C71"}
          color={"white"}
          borderTopRadius={8}
          
        >
          <HStack justifyContent={"space-between"} alignItems={"center"} p={2}>
            <Text>Product/Options</Text>
            <Text>Price/Cycle</Text>
          </HStack>
          <HStack
            justifyContent={"center"}
            pt={6}
            borderBottom={"2px"}
            color={"black"}
            pb={6}
          >
            <Text color={"black"} justifyContent={"center"}>
              Your Shopping Cart is Empty
            </Text>
          </HStack>
          <Tabs variant="enclosed" color={"black"}>
            <TabList>
              <Tab>Apply Promo Code</Tab>
              <Tab>Estimate Taxes</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <InputGroup w={580}>
                  <InputLeftElement pointerEvents="none">
                    <RxIdCard color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Enter promo code if you have one"
                  />
                </InputGroup>
                <HStack pt={5} justifyContent={"center"}>
                  <Button w={600} bg={"white"} border={"1px"}>
                    Validate Code
                  </Button>
                </HStack>
              </TabPanel>
              <TabPanel>
                <FormLabel>State</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <FormLabel>country</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <HStack justifyContent={"center"} pt={5}>
                  <Button
                    justifyContent={"center"}
                    w={200}
                    bg={"none"}
                    border={"1px"}
                  >
                    Update Totals
                  </Button>
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Stack pl={5}>
          <Card
            //   overflow="hidden"
            //   variant="outline"
            w={290}
            opacity={"0.7"}
            borderBottom={"4px"}
          >
            <CardBody>
              <HStack justifyContent={"center"} bg={"#625E5D"} p={2} w={270}>
                <Heading size="md" justifyContent={"center"} color={"White"}>
                  Order Summary
                </Heading>
              </HStack>
              <HStack justifyContent={"space-between"} fontSize={13}>
                <Text>Subtotal</Text>
                <Text>Rs 0.00 INR</Text>
              </HStack>
              <HStack justifyContent={"space-between"} fontSize={13}>
                <Text>IGST @ 18.00%</Text>
                <Text>Rs 0.00 INR</Text>
              </HStack>
              <Text fontSize={13}>Total</Text>
              <HStack justifyContent={"flex-end"}>
                <Box justifyContent={"space-evenly"}>
                  <Text fontSize={30}>Rs 0.00 INR</Text>
                  <Text fontSize={10} justifyContent={"end"}>
                    Total Due Today
                  </Text>
                </Box>
              </HStack>
            </CardBody>

            <CardFooter>
              <VStack justifyContent={"end"}>
                <Button>CheckOut</Button>
                <Link to={"/shopping"}>
                  <Box fontSize={"10"}>
                    <Text>Continue Shopping</Text>
                  </Box>
                </Link>
              </VStack>
            </CardFooter>
          </Card>
        </Stack>
      </Flex>
    </>
  );
}

export default View;
