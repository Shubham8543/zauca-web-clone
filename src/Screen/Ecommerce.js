import { Box, Text, Flex, Img, UnorderedList, Link,  } from "@chakra-ui/react";
import { wrap } from "framer-motion";
import React from "react";

function Ecommerce() {
  return (
    <Box justifyContent={"center"} wrap={"wrap"}>
      <Box>
        <Text fontWeight={700} fontSize={40} p={5} textAlign={"center"}>
          e-Commerce Web Development Pricing
        </Text>
        <Text
          fontSize={20}
          pl={20}
          pr={20}
          fontWeight={300}
          textAlign={"center"}
        >
          Zauca is India’s most affordable, low cost ecommerce web design
          company in India offering website designing with Unbeatable “Pricing”
        </Text>
      </Box>
      <Flex alignItems={"center"} justifyContent={"center"} wrap={"wrap"}>
        <Box border={"1px"} ml={14} m={5} boxShadow="dark-lg " _hover={"dak-lg-y-2"}>
          <Box>
            <Img src="https://www.zauca.com/wp-content/uploads/2017/12/Silver2.png" />
          </Box>
          <Text fontSize={18} p={5} fontWeight={700}>
            Silver Plan – ₹15300
          </Text>
          <UnorderedList>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 1 Free Domain Name
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – 5 Pages (Basic Design)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Unlimited Product Basic Listing
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Business Email id (Webmail)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Unlimited Images & Videos
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Unlimited (Bandwidth/ Space)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 100% Responsive Website
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Social Media Integration
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Live Chat Integration
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Payment Gateway
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 24/7 Support (<b>SLA</b>: 48 Hours)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Annual Renewal ₹4000
            </Text>
          </UnorderedList>
          <Text p={5} fontWeight={500} opacity={"0.5"}>
            Note: GST @ 18% Applicable on All Purchase
          </Text>
          <Link p={5} pt={10} color={"#48ADF9"} fontWeight={500}>
            Book Now – Rs. 5000
          </Link>
        </Box>

        <Box border={"1px"} ml={14} m={5} boxShadow="dark-lg">
          <Box>
            <Img src="https://www.zauca.com/wp-content/uploads/2017/12/Gold2.png" />
          </Box>
          <Text fontSize={18} p={5} fontWeight={700}>
            Gold Plan – ₹18300
          </Text>
          <UnorderedList>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 1 Free Domain Name
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – UL (10) Pages* (Dynamic Design)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Unlimited Product Listing
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Unlimited Email id (Webmail)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Unlimited Images & Videos
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Unlimited (Bandwidth/ Space)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 100% Responsive Website
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Social Media Integration
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Live Chat Integration
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={700}>
              – Payment Gateway
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – cPanel* Access
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – SSL Certificate
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – 24/7 Support (SLA: 12 Hours)
            </Text>
            <Text fontSize={17} opacity={"0.5"} fontWeight={500}>
              – Annual Renewal ₹5000
            </Text>
          </UnorderedList>
          <Text p={5} fontWeight={500} opacity={"0.5"}>
            Note: GST @ 18% Applicable on All Purchase
          </Text>
          <Link p={5} pt={10} color={"#48ADF9"} fontWeight={500}>
            Book Now – Rs. 10000
          </Link>
        </Box>

        <Box border={"1px"} ml={14} m={5} w={400} boxShadow="dark-lg">
          <Box>
            <Img src="https://www.zauca.com/wp-content/uploads/2017/12/custom-solutions.jpg" />
          </Box>
          <Text fontSize={18} p={5} fontWeight={700}>
            Custom Solutions for Enterprises
          </Text>
          <Text fontSize={17} opacity={"0.5"} fontWeight={500} p={5}>
            Almost any functionality that a client wants can be coded and
            integrated into the website, android application and CMS.
          </Text>
          <Text p={5}>
            Common applications Special functionality for which there is not an
            off-the-shelf solution Extend common web components with your
            special business rules Integrate your web site with other systems.
            We know software and we engineer custom solutions
          </Text>

          <Text p={5} fontWeight={500} opacity={"0.5"}>
            Note: GST @ 18% Applicable on All Purchase
          </Text>
          <Link p={5} pt={10} color={"#48ADF9"} fontWeight={500}>
            Book Now – Rs. 5000
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Ecommerce;
