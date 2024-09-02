import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsLightningFill } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import {  FaUsers, FaBlackTie } from "react-icons/fa";
// import {FaIndianRupeeSign} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";


function Body2() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify="center"
      mt={-20}
      p={4}
      flexDirection={{base: 'column',md: 'column', 'lg': 'row'}}


    >
      {/* box1 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px" // Ensure boxes are responsive and grow/shrink appropriately
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <IoChatbubblesOutline size={60} color="white" />
          </Box>
          <Box>
            <Text fontWeight={500} pb={5}>
              Live Chat
            </Text>
            <Text opacity="0.7">
              Real time chatting with customers on your website builds confidence, improves conversion rates, and creates a strong brand image.
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* box2 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px"
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <BsLightningFill size={60} color="white" />
          </Box>
          <Box>
            <Text fontWeight={500} pb={5}>
              Lighting Speed
            </Text>
            <Text opacity="0.7">
              Site speed and design are crucial for ranking and user retention. A faster website keeps users engaged and improves SEO.
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* box3 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px"
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <MdOutlinePhoneIphone size={60} color="white" />
          </Box>
          <Box>
            <Text fontWeight={500} pb={5}>
              Responsive Design
            </Text>
            <Text opacity="0.7">
              A responsive website adapts to various screen sizes, providing a seamless experience across mobile, laptop, desktop, and tablets.
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* box4 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px"
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <FaIndianRupeeSign size={60} color="white" /> 
          </Box>
          <Box>
            <Text fontWeight={500} pb={5}>
              Payment Gateway
            </Text>
            <Text opacity="0.7">
              Affordable web design services include integrated payment gateways for seamless online transactions.
            </Text>
          </Box>
        </VStack>
      </Box>
      

      {/* box5 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px"
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <FaUsers size={60} color="white" />
          </Box>
          <Box>
            <Text fontWeight={500} pb={5}>
              Social Media
            </Text>
            <Text opacity="0.7">
              Enhance your social media presence by making your website more social media-friendly, increasing your online reach and sales.
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* box6 */}
      <Box
        textAlign="center"
        p={4}
        flex="1 1 300px"
        m={2}
      >
        <VStack>
          <Box
            p={5}
            bg="blue.500"
            borderRadius="full"
            h={100}
            w={100}
            boxShadow="dark-lg"
          >
            <FaBlackTie size={60} color="white" />
          </Box>
          <Box>
            <Text fontWeight={500} pb={3}>
              24/7 Support
            </Text>
            <Text opacity="0.7">
              We offer round-the-clock support to ensure maximum uptime and excellent customer service for your website.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Body2;
