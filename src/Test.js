import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

const Test = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
  return (
    <Box  height={{base:"50vh",sm:"100vh",md:"50vh",lg:"30vh"}} bg={{base:"red.100",sm:"red.200",md:"red.300",lg:"red.400"}}>
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)',sm:'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
      gap={4} // Adjust gap between grid items
      p={4} // Optional padding for the container
       width={"100%"}
      bg={"#063F6D"}
    >
      <Box p='4' bg='red.400'  height={"50%"} width={"100%"} >
        Box 1
      </Box>
      <Box p='4' bg='red.400' w='full' height='40'>
        Box 2
      </Box>
      <Box p='4' bg='red.400' w='full' height='40'>
        Box 3
      </Box>
      <Box p='4' bg='red.400' w='full' height='40'>
        Box 4
      </Box>
      <Box p='4' bg='red.400' w='full' height='40'>
        Box 5
      </Box>
    </Grid>
    </Box>  
    
    );
};

export default Test;
