import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

function knowledgebase() {
  return (
    <>
      <Navbar />
      <HStack justifyContent={"center"} w={'100%'}>
      <Box
        justifyContent={"center"} 
        flexDirection={{ lg: "row", md: "column", base: "column" }}
      >
        <Flex justifyContent={"center"}>
          <Box borderBottom={"1px"} w={'100%'}>
            <Text fontSize={40} color={"#084D89"}>
              Knowledgebase
            </Text>
          </Box>
        </Flex>
        {/* <HStack justifyContent={'center'}>
        <Link>
          <Text>Portal Home </Text>
        </Link>
        <Text> Knowledgebase </Text>
      </HStack> */}
        <Flex textAlign={"center"} pt={10}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        >
          
          <Input
            h={"20"}
            w={'100%'}
            fontSize={25}
            border={"1px"}
            type="text"
            placeholder="Enter a qustion here to search our Knowledgebase for answers"
            borderRadius={'none'}
          />
          <Button
            alignItems={"center"}
            bg={"#084D89"}
            w={"100px"}
            color={"white"}
            mb={"3"}
            borderRadius={'none'}
            h={20}
          >
            Search
          </Button>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box w={'100%'}>
            <Text fontSize={40} fontWeight={"350"}>
              Categories
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <VStack
            bg={"#C8ECF9"}
            w={"100%"}
            h={70}
            borderRadius={"5px"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Text
              alignItems={"center"}
              mt={"5"}
              fontSize={20}
              color={"dark"}
              opacity={"0.6"}
            >
              No Articles Found
            </Text>
          </VStack>
        </Flex>
      </Box>
      </HStack>
    </>
  );
}

export default knowledgebase;
