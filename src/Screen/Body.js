import { Box, Text, Img } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Body() {
  return (
    <Box w={"100%"}>
      <Box
        position={"absolute"}
        top={"30%"}
        left={"35%"}
        transform={"translate(-50%, -50%)"}
        color={"white"}
        fontSize="6xl"
      >
        
      </Box> 

      <Img
        w={"100%"}
        src="https://lh3.googleusercontent.com/p/AF1QipOkG0sotA6fs0LQfdykvxcyUChMLAx15RW34DPu=s1360-w1360-h1020"
      />
    </Box>
  );
}

export default Body;
