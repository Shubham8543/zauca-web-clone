import {
  Box,
  Text,
  Flex,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Contact() {
  return (
    <>
    <Navbar/>
    <Flex justifyContent={'center'} p={10}
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        >
    <Box >
      <Box borderBottom={"1px"}>
        <Text fontSize={50} color={'#214B8E'}>Open Ticket</Text>
      </Box>
      <Flex fontSize={13}  opacity={'0.7'}>
        <Link>
          <Text p={3}>Portal Home </Text>
        </Link>
        <Link>
          <Text p={3}>Client Area</Text>
        </Link>
        <Link>
          <Text p={3}>Support Tickets</Text>
        </Link>
<Text p={3}>Submit Ticket</Text>
      </Flex>
      <Box>
      <Box >
        <FormControl>
            <HStack>
           <FormLabel>Name</FormLabel>
            <Input w={'100%'} />

            <FormLabel >Email Address</FormLabel>
            <Input w={'100%'} />
            </HStack>
          <FormLabel>Subject</FormLabel>
          <Input w={'100%'} />
            <HStack pt={5}>
            <FormLabel>Department</FormLabel>
            <Input w={'100%'}/>
            <FormLabel>Priority</FormLabel>
            <Input w={'100%'}/>
            </HStack>
            <FormLabel>Massage</FormLabel>
            <Textarea w={'100%'} h={'100%'}></Textarea>
            <FormLabel>Attachments</FormLabel>
            <Input w={'100%'} type="File"/>
            <FormLabel>Phone Number</FormLabel>
            <Input w={'100%'}/>
            <Button>Submit</Button>
        </FormControl>
      </Box>
    </Box>
    </Box>
    </Flex>
    </>
  );
}

export default Contact;
