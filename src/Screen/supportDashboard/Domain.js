import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

function Domain() {
  return (
    <>
      <Navbar />
      <Flex justifyContent={"center"}>
        <Text fontSize={30} borderBottom={"1px"}>
          Transfer Domain
        </Text>
      </Flex>
      <HStack justifyContent={"center"} pt={10}>
        <VStack>
          <Text fontSize={20}>Transfer your domain to us</Text>
          <Text fontSize={15}>
            Transfer now to extend your domain by 1 year!*
          </Text>
          <Box>
            <FormControl border={"1px"}>
              <HStack bg={"#E8EAED"} borderBottom={"1px"}>
                <Text fontSize={20} pt={5}>
                  Single domain transfer
                </Text>
              </HStack>
              <Box p={5} bg={"white"}>
                <FormLabel>Doamin Name</FormLabel>
                <Input w={400} placeholder="example.com" type="email" />
                <FormLabel>Authorization Code</FormLabel>
                <Input w={400} placeholder="epp.code/auth code" type="email" />
              </Box>
              <HStack
                justifyContent={"end"}
                p={"2"}
                bg={"#E8EAED"}
                borderTop={"1px"}
              >
                <Button bg={"#174985"} color={"white"}>
                  ADd to Cart
                </Button>
              </HStack>
            </FormControl>
            <HStack justifyContent={"center"} pt={5}>
              <Text fontSize={10}>
                * Excludes certain TLDs and recently renewed domains
              </Text>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </>
  );
}

export default Domain;
