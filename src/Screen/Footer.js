import {
  Flex,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      pb={10}
      bg={"#2C2828"}
      color={"white"}
      // justifyContent={"center"} 
      // wrap={'wrap'}
      justifyContent={'center'}
      display={{ base: "wrap", lg: "flex" }}
    >
      <Box pt={10} >
       <HStack justifyContent={'center'}>
       <Text p={5} fontSize={20}>
          Terms & Conditions
        </Text>
       </HStack>
        <VStack opacity={"0.5"}>
          <Link>About Us</Link>
          <Link>Terms of Services</Link>
          <Link>Refund Policy</Link>
          <Link>Privacy Policy</Link>
          <Link>Contact</Link>
        </VStack>
      </Box>
      <Box pt={10} display={{ base: "column", lg: "row" }}>
       <HStack justifyContent={'center'}>
       <Text p={5}  fontSize={20}>
          Plan & Pricing
          <Text opacity={"0.5"} >Business Pricing</Text>
        </Text>

       </HStack>
        <VStack opacity={"0.5"}>
          <Link>Basic Plan</Link>
          <Link>Classic Plan</Link>
          <Link>Premium Plan</Link>
          <Text fontSize={20}>Privacy Policy</Text>
          <Link>Silver Plan</Link>
          <Link>Gold Plan</Link>
        </VStack>
      </Box>
      <Box pt={16} display={{ base: "wrap", lg: "nowrap" }}>
        <VStack opacity={"0.5"}>
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Demo</Link>
          <Link>Reviews</Link>
          <Link>Contact</Link>
          <Link>Support</Link>
          <Link>Client Area</Link>
        </VStack>
      </Box>
      <Box pt={16} px={10} textAlign={"center"} >
        <VStack>
          <Text fontSize={30} w={300}>
            Website Design, Business Website Design, eCommerce Website Design
          </Text>
        </VStack>
        <Text w={310}>
          © 2024 Website Design, Business Website Design, eCommerce Website
          Design. Built using WordPress and the <Link>Mesmerize Theme</Link>
        </Text>
        <HStack justifyContent={"center"} p={2}>
          <Link >
            <FaWhatsappSquare />
          </Link>
          <Link>
            <FaFacebookSquare />
          </Link>
          <Link>
            <FaTwitterSquare />
          </Link>
          <Link>
            <FaInstagramSquare />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Footer;
