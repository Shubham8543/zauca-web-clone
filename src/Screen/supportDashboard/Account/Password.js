import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";

/**
 * The Password component is a functional component that renders a form for users to reset their forgotten passwords.
 * It displays a navbar at the top, a heading and a text asking the user to enter their email address, and a form with 
 * an input field for the user to enter their email address. The form also includes a submit button.
 * 
 */
function Password() {
  return (
    <>
      {/* Renders the Navbar component at the top of the page */}
      <Navbar />
      <Flex justifyContent={"center"}>
        {/* Centers the content vertically and horizontally on the page */}
        <Box pt={10} w={600}>
          {/* Displays a heading in large font size and adds a bottom border */}
          <Text fontSize={40} borderBottom={"1px"}>
            Lost Password Reset
          </Text>
          {/* Displays a text explaining the purpose of the form */}
          <Text pt={5}>
            Forgotten your password? Enter your email address below to begin the reset process.
            Forgotten your password? Enter your email address below to begin the
            reset process.
          </Text>
          {/* Creates a form with a label and input field for the user to enter their email address */}
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input type="text" placeholder="Enter email" />
            {/* Centers the submit button horizontally and adds a padding of 10 pixels */}
            <HStack justifyContent={'center'} p={10}>
              {/* Creates a button with a background color of #0A4374 (a dark blue) and white text color */}
              <Button bg={'#0A4374'} color={'white'}>Submit</Button>
            </HStack>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
}

export default Password;
