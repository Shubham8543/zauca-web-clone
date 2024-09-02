import {
  Flex,
  Text,
  VStack,
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  CardBody,
  HStack,
  UnorderedList,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { FaShoppingCart } from "react-icons/fa";

function Bussines2() {
  return (
    <>
      <Navbar />
      <Flex
        justifyContent={"center"}
        bg={"#F6F5F1"}
        w={"100%"}
        h={"100%"}
        display={{ base: "column ", lg: "row" }}
        p={10}
      >
        <VStack>
          <Text fontSize={40} justifyContent={"center"} borderBottom={"1px"}>
            Business Website
          </Text>
          <HStack
            pt={10}
            wrap={"wrap"}
            justifyContent={"center"}
            display={{ base: "auto", lg: "flex" }}
          >
            <Card w={400} h={380}>
              <CardHeader bg={"#D8DBD7"}>
                <Heading size="sm"> Startup Plan (Plesk) - ₹5800</Heading>
              </CardHeader>
              <CardBody>
                <HStack>
                  <UnorderedList fontSize={12}>
                    <Text>– 1 Free Domain (.in, .co.in)</Text>
                    <Text>– 3 Page (Static Website - Not Upgradable)</Text>
                    <Text>– No Business Email id</Text>
                    <Text>– Unlimited Images & Videos</Text>
                    <Text>– Unlimited (Bandwidth/ Space)*</Text>
                    <Text>– SEO Ready Website*</Text>
                    <Text>– 100% Responsive Website</Text>
                    <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                    <Text>– Annual Renewal Rs. 3000</Text>
                  </UnorderedList>

                  <VStack position={"absolute"} top={20} right={0} p={5}>
                    <Text>
                      Rs 3,000.00 INR
                      <Text fontSize={12}>Annually</Text>
                      <Text fontSize={10}>Rs 2,800.00 Setup Fee</Text>
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
                <Heading size="sm"> Basic Plan (Plesk) - ₹7800</Heading>
              </CardHeader>
              <CardBody>
                <HStack>
                  <UnorderedList fontSize={12}>
                    <Text>– 1 Free Domain Name</Text>
                    <Text>– 5 Page (Dynamic Website - Upgradable)</Text>
                    <Text>– 3 Business Email id</Text>
                    <Text>– Unlimited Images & Videos</Text>
                    <Text>– Unlimited (Bandwidth/ Space)</Text>
                    <Text>– SEO Ready Website</Text>
                    <Text>– 100% Responsive Website</Text>
                    <Text>– WhatsApp Integration</Text>
                    <Text>– Payment Gateway Integration</Text>
                    <Text>– Social Media Integration</Text>
                    <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                    <Text>– Annual Renewal Rs. 3000</Text>
                  </UnorderedList>

                  <VStack position={"absolute"} top={20} right={0} p={5}>
                    <Text>
                      Rs 3,000.00 INR
                      <Text fontSize={12}>Annually</Text>
                      <Text fontSize={10}>Rs 4,800.00 Setup Fee</Text>
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
          <HStack
            wrap={"wrap"}
            justifyContent={"center"}
            display={{ base: "auto", lg: "flex" }}
          >
            <Card w={400} h={380}>
              <CardHeader bg={"#D8DBD7"}>
                <Heading size="sm   "> Classic Plan (Plesk) - ₹9900</Heading>
              </CardHeader>
              <CardBody>
                <HStack>
                  <UnorderedList fontSize={12}>
                    <Text>– 1 Free Domain Name</Text>
                    <Text>– UL Pages* (Dynamic Website)</Text>
                    <Text>– Business Email id</Text>
                    <Text>– SSL Integration</Text>
                    <Text>– Unlimited Images & Videos</Text>
                    <Text>– Unlimited (Bandwidth/ Space)</Text>
                    <Text>– SEO (Express) Ready Website</Text>
                    <Text>– 100% Responsive Website</Text>
                    <Text>– WhatsApp Integration</Text>
                    <Text>– Payment Gateway Integration</Text>
                    <Text>– Social Media Integration</Text>
                    <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                    <Text>– Annual Renewal Rs. 4000</Text>
                  </UnorderedList>

                  <VStack position={"absolute"} top={20} right={0} p={5}>
                    <Text>
                      Rs 4,000.00 INR
                      <Text>Annually</Text>
                      <Text fontSize={10}>Rs 5,900.00 Setup Fee</Text>
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
                <Heading size="md"> Premium Plan (Plesk) - ₹14300</Heading>
              </CardHeader>
              <CardBody>
                <HStack>
                  <UnorderedList fontSize={12}>
                    <Text>– 1 Free Domain Name</Text>
                    <Text>– UL Pages* (Dynamic Website)</Text>
                    <Text>– Unlimited Email id</Text>
                    <Text>– Unlimited Images & Videos</Text>
                    <Text>– Unlimited (Bandwidth/ Space)</Text>
                    <Text> – SEO (Express) Ready Website</Text>
                    <Text>– 100% Responsive Website</Text>
                    <Text>– WhatsApp Integration</Text>
                    <Text>– Payment Gateway Integration</Text>
                    <Text>– Social Media Integration</Text>
                    <Text>– cPanel* Access</Text>
                    <Text>– SSL Certificate</Text>
                    <Text>– Android App (WebView)</Text>
                    <Text>– 24/7 Support (Phone/Email/Chat)</Text>
                    <Text>– Annual Renewal Rs. 5000</Text>
                  </UnorderedList>

                  <VStack position={"absolute"} top={20} right={0} p={5}>
                    <Text>
                      Rs 5,000.00 INR <Text fontSize={12}>Annually</Text>
                      <Text fontSize={10}>Rs 9,300.00 Setup Fee</Text>
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
        </VStack>
      </Flex>
    </>
  );
}

export default Bussines2;
