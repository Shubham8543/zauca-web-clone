import React from "react";
import Navbar from "./Navbar";
import { Box, Flex, HStack, Text,Link, VStack } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";


function Announcements() {
  return (
    <>
      <Navbar />
      <Flex justifyContent={"center"} borderBottom={"1px"}
            flexDirection={{ lg: "row", md: "column", base: "column" }}
            >
        <Box>
          <HStack alignItems={"center"}
          >
            <Text color={"#084D89"} fontSize={"50"}>
              News
            </Text>
            <Text fontSize={30} mt={"4"} opacity={"0.5"}>
              All the latest from Zauca
            </Text>
          </HStack>
        </Box>
      </Flex>
      <Flex justifyContent={'center'}
      >
      <VStack justifyContent={'center'} w={800}>
      <Box>
        <Link>
          <Text fontSize={'30px'} color={'#084D89'} fontWeight={500}>About Zauca</Text>
        </Link>
        <Text w={'100%'}p={5} >
          Zauca, is a professional web designing company based in Bangalore,
          started in the year 2009 with a mission to provide high quality,
          responsive & cost effective web designing services. What separates our
          design from art is that our “Designs” are 100% functional. We, at
          Zauca, offer professional and state-of-the-art web designing services
          ... Read More »
        <HStack opacity={'0.7'} pt={5}>
            <FaCalendarAlt/>
        <Text> 8th Aug 2019
        </Text>
        </HStack>
        </Text>

      </Box>
      </VStack>
      </Flex>
    </>
  );
}

export default Announcements;
