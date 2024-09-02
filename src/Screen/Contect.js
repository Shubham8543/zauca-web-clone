import React from "react";
import {
  Text,
  Box,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  //   Option
} from "@chakra-ui/react";

function Contect() {
  return (
    <VStack
      justifyContent={"center"}
      wrap={"wrap"}
      display={{ base: "wrap", lg: "flex" }}
      
      
      
    >
      <Box textAlign={"center"}>
        <Text fontSize={40}>Contact us</Text>
        <Box p={10} fontSize={20}>
          <Text>
            Please feel free to contact us & we would be happy to assist you!
          </Text>
          <Text> Email Ids</Text>
          <Text>
            For Sales : sales@zauca.in
            <Text>For Support: support@zauca.in </Text>
            <Text>For Resellers: reseller@zauca.in</Text>
          </Text>
          <Text>Phone Numbers</Text>
          <Text>Sales: 1800-212-9495 </Text>
          <Text>Support: 080-6777-6777 </Text>
        </Box>
      </Box>
      <Box justifyContent={"center"} w={600}  p={"50px"} bg={"#F8FAFC"}
      boxSize={{ base: "400", lg: "50%"}}  h={{base:"100%",lg:"100%"}}>
        <FormControl
          justifyContent={"center"}
          // flex={{ base: "wrap", lg: "nowrap" }}
      // display={{ base: "wrap", lg: "flex" }}

        >
          <FormLabel>Name</FormLabel>
          <Input border={"1px"} placeholder="Name" />
          <FormLabel>Phone Number</FormLabel>
          <Input border={"1px"} placeholder="Phone Number" />
          <FormLabel>Type of Website</FormLabel>
          <Select border={"1px"} placeholder="Select" />
          <FormLabel>Support Language</FormLabel>
          <Select border={"1px"} placeholder="Select" />
          <FormLabel>Email</FormLabel>
          <Input border={"1px"} placeholder="Eamil" />
          <FormLabel> Comment or Message</FormLabel>
          <Textarea border={"1px"}></Textarea>
          <Button>Submit</Button>
        </FormControl>
        
      </Box>
    </VStack>
  );
}

export default Contect;
