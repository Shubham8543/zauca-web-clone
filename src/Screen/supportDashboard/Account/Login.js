import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";



function Login() {
  return (
    <>
    <Navbar/>
    <Flex justifyContent={"center"} p={14}>
      
      <Box w={500}>
        <Box alignItems={"center"}>
          <HStack alignItems={"center"}>
            <Text color={"#034F91"} fontSize={50}>
              Login
            </Text>
            <Text fontSize={30} mt={4} color={"#83868A"}>
              This page is restricted
            </Text>
          </HStack>
        </Box>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="Text" placeholder="Email Address" />
          <FormLabel pt={"5"}>Password</FormLabel>
          <Input type="Password" placeholder="Password" />
          <Checkbox pt={5}> Remember Me</Checkbox>
          <HStack justifyContent={"center"} pt={10}>
            <Button bg={"#034F91"} color={"white"}>
              Login
            </Button>
            <Link>
              <Button>Forgot Password</Button>
            </Link>
          </HStack>
        </FormControl>
      </Box>
    </Flex>
    </>
  );
}

export default Login;
