import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Link,
  VStack,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { RiRemoteControlFill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Navbar from "./Navbar";

const Home2 = () => {
  return (
    <Box>
      <Navbar />

      <Flex
        // flex={'wrap'}
        justifyContent={"center"}
        h={"100%"}
        w={"100%"}
        p={10}
        bg={"#063F6D"}
        alignItems={"center"}
        color={"white"}
        textAlign={"center"}
      >
        <Box>
          <Text fontSize={30}>
            Begin the search for your perfect domain name...
          </Text>
          <Flex mt={2} p={2}>
            <Input
              size={{ md: "md", base: "sm" }}
              fontSize={{ base: "10px", md: "15px" }}
              borderRadius={"none"}
              // w={{ base: "auto", md: "20%", lg: "80%" }}
              bg={"white"}
              placeholder="eg. example.com"
            />
            <Button
              bg={"#72E9A6"}
              fontSize={{ base: "10px", md: "15px" }}
              w={{ base: "auto", md: "15%" }}
              size={{ base: "auto", md: "20%" }}
              borderRadius={"none"}
            >
              Search
            </Button>
            <Button
              borderRadius={"none"}
              fontSize={{ base: "10px", md: "15px" }}
              w={{ base: "auto", md: "15%" }}
              size={{ base: "auto", md: "20%" }}
              bg={"#E8E8E8"}
            >
              Transfer
            </Button>
          </Flex>
        </Box>
      </Flex>
      {/* <Grid> */}
      <Flex
        bg={"#43C7EF"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        color={"white"}
        flex={"wrap"}
      >
        <Box p={5}>
          <Text fontSize={20}>How can we help today?</Text>
        </Box>
        <Link>
          <Box display={{ base: "auto", lg: "column" }}>
            <VStack p={5} fontSize={20}>
              <FaGlobe />
              <Text fontSize={10}>BUY A DOMAIN</Text>
            </VStack>
          </Box>
        </Link>
        <Link>
          <Box>
            <VStack p={5} fontSize={20}>
              <RiRemoteControlFill />
              <Text fontSize={10}>ORDER HOSTING</Text>
            </VStack>
          </Box>
        </Link>
        <Link>
          <Box>
            <VStack p={5} fontSize={20}>
              <MdOutlinePayment />
              <Text fontSize={10}>MAKE PAYMENT</Text>
            </VStack>
          </Box>
        </Link>
        <Link>
          <Box>
            <VStack p={5} fontSize={20}>
              <IoMdMail />
              <Text fontSize={10}>GET SUPPORT</Text>
            </VStack>
          </Box>
        </Link>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h={'100%'}
        bg={"#FFFFFF"}
        borderBottom={"1px"}
      >
        <VStack w={800}>
          <Box
            w={"100%"}
            flexDirection={{ lg: "row", md: "column", base: "column" }}
            p={5}
          >
            <Text>News</Text>
            <Text>
              Aug 8th <Link>About Zauca</Link>
            </Text>
            <Text>
              Zauca, is a professional web designing company based in Bangalore,
              started in the year 2009 with a mission to provide high quality,
              responsive & cost effective web designing services. What separates
              our design from art is that our “Designs” are 100% functional. We,
              at Zauca, offer professional and state-of-the-art web designing
              services ... <Link bg={"yellow"}>Read More »</Link>
            </Text>
          </Box>
        </VStack>
      </Flex>
      <HStack justifyContent={"center"} 
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        m={5}>
        <Text justifyContent={"center"}>
          Copyright © 2024 Zauca. All Rights Reserved.
        </Text>
      </HStack>
      {/* </Grid> */}
    </Box>
  );
};

export default Home2;
