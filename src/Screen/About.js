import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box>
      <Box justifyContent={'center'} textAlign={'center'} >
        <Text fontSize={15} fontWeight={700}>About Zauca Consultancy Services</Text>
        <Text fontSize={40} p={5} fontWeight={500}>India’s No 1 <b><i> Website Design </i></b> Company</Text>
        <Text opacity={'0.6'} fontSize={20} fontWeight={300} pb={5}>Successfully Delivered 5800+ Websites</Text>
        <Text fontSize={17} fontWeight={600} opacity={'0.4'}  >
          Zauca, offers wide range of Website design services in India including
          business website designing, personal blogs, web portals designing,
          micro websites, flash websites, e-commerce websites designing, static
          websites, and dynamic websites across all categories & sectors.
        </Text>
      </Box>
      <Flex justifyContent={'center'} gap={10} mt={5}>
        <Box >
            <Img boxShadow='dark-lg' src="https://www.zauca.com/wp-content/uploads/2017/10/digital_marketing.jpg" boxSize={'400'} mr={10}/> 
        </Box>
        <Box   >
            <Img boxShadow='dark-lg' src="https://www.zauca.com/wp-content/uploads/2017/10/Web-Design-Company.jpg" boxSize={'400'}/>
        </Box>
        <Box >
            <Img boxShadow='dark-dark' src="https://www.zauca.com/wp-content/uploads/2017/10/Web-Design-Company.jpg" boxSize={'400'}/>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
