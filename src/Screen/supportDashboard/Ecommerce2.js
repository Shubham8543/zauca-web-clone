import {
  Box,
  Flex,
  HStack,
  Text,
  CardHeader,
  Card,
  Heading,
  CardBody,
  UnorderedList,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { FaShoppingCart } from "react-icons/fa";

function Ecommerce2() {
  return (
    <>
      <Navbar />
      <Flex justifyContent={"center"} borderBottom={"1px"}>
        <Text fontSize={40} color={"#174985"}>
          e-Commerce Website
        </Text>
      </Flex>
      <HStack
        pt={10}
        justify={"center"}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
      >
        <Card w={400} h={380}>
          <CardHeader bg={"#D8DBD7"}>
            <Heading size="sm">Gold Plan (Plesk) - ₹15300</Heading>
          </CardHeader>
          <CardBody>
            <HStack>
              <UnorderedList fontSize={12}>
                <Text>– 1 Free Domain Name</Text>
                <Text>– UL Pages* (Dynamic Design)</Text>
                <Text>– Unlimited Product Listing</Text>
                <Text>– Unlimited Email id</Text>
                <Text>– Unlimited Images & Videos</Text>
                <Text>– Unlimited (Bandwidth/ Space)</Text>
                <Text>– 100% Responsive Website</Text>
                <Text>– Social Media Integration</Text>
                <Text>– Live Chat Integration</Text>
                <Text>– Payment Gateway</Text>
                <Text>– cPanel* Access</Text>
                <Text>– SSL Certificate</Text>
                <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                <Text>– Annual Renewal Rs.5000</Text>
              </UnorderedList>

              <VStack position={"absolute"} top={20} right={0} p={5}>
                <Text>
                  Rs 5,000.00 INR
                  <Text fontSize={12}>Annually</Text>
                  <Text fontSize={10}>Rs 10,300.00 Setup Fee</Text>
                </Text>
                <Button bg={"#58CA2B"} color={"white"}>
                  <FaShoppingCart />
                  View here
                </Button>
              </VStack>
            </HStack>
          </CardBody>
          {/* <CardFooter></CardFooter> */}
        </Card>

        <Card w={400} h={380}>
          <CardHeader bg={"#D8DBD7"}>
            <Heading size="sm"> Silver Plan (Plesk) - ₹12300</Heading>
          </CardHeader>
          <CardBody>
            <HStack>
              <UnorderedList fontSize={12}>
                <Text>– 1 Free Domain Name</Text>
                <Text>– 5 Pages (Basic Design)</Text>
                <Text>– 5 Pages (Basic Design)</Text>
                <Text>– Business Email id</Text>
                <Text>– Unlimited Images & Videos</Text>
                <Text>– Unlimited (Bandwidth/ Space)</Text>
                <Text>– 100% Responsive Website</Text>
                <Text>– Social Media Integration</Text>
                <Text>– Live Chat Integration</Text>
                <Text>– Payment Gateway</Text>
                <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                <Text>– Annual Renewal Rs. 4000</Text>
              </UnorderedList>

              <VStack position={"absolute"} top={20} right={0} p={5}>
                <Text>
                  Rs 4,000.00 INR
                  <Text fontSize={12}>Annually</Text>
                  <Text fontSize={10}>Rs 8,300.00 Setup Fee</Text>
                </Text>
                <Button bg={"#58CA2B"} color={"white"}>
                  <FaShoppingCart />
                  View here
                </Button>
              </VStack>
            </HStack>
          </CardBody>
          {/* <CardFooter></CardFooter> */}
        </Card>
      </HStack>
    </>
  );
}

export default Ecommerce2;
