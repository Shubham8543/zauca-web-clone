import {
  Box,
  Flex,
  HStack,
  Text,
  UnorderedList,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa6";

import React from "react";

function Startup() {
  return (
    // <Flex alignItems={"center"} justifyContent={"center"}>
    <Box w={'100%'} >
      <Box>
        <Text textAlign={"center"} fontSize={30} pt={10} fontWeight={500} p={5} mx={10}>
          StarUp Website & Reseller Plans
        </Text>
        <Text textAlign={"center"} mx={10}>
          Zauca is India’s most affordable, low cost web design company in India
          offering website designing & Reseller plans with Unbeatable “Pricing &
          Commisions”
        </Text>
      </Box>
      <Flex justifyContent={"center"}  wrap={"wrap"} >
        <Box>
          <Box
            justifyContent={"center"}
            fontSize={30}
            h={"100px"}
            w={"100px"}
            p={"33px"}
            borderRadius={"100%"}
            border={"1.5px solid #45B1F4"}
          >
            <FaRocket color="#45B1F4" />
          </Box>
          <Box pt={5}>
            <UnorderedList w={300}>
            <Text fontSize={20} fontWeight={500}>
              Startup Plan – ₹4800
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 1 Free Domain (.in, .co.in)
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 5 Page (Static Website)
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – No Business Email id
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Unlimited Images & Videos
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Unlimited (Bandwidth/ Space)
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 100% Responsive Website
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 24/7 Support (SLA: 48 Hours)
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Annual Renewal ₹3000
            </Text>
            <Text p={5} opacity={"0.6"} fontWeight={400}>
              Note: GST @ 18% Applicable on All Purchase
            </Text>
            <Button bg={"#F5B34F"}>BOOK NOW FOR FREE</Button>
            </UnorderedList>
          </Box>
          {/* </VStack> */}
        </Box>

        <Box pl={10}>
          <Box
            justifyContent={"center"}
            fontSize={30}
            h={"100px"}
            w={"100px"}
            p={"33px"}
            borderRadius={"100%"}
            border={"1.5px solid #45B1F4"}
          >
            <FaRocket color="#45B1F4" />
          </Box>
          <Box pt={5} w={300} >
            {/* <UnorderedList pt={5}> */}
            <Text fontSize={20} fontWeight={500}>
              Basic Reseller Plan – ₹10000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Subscription Charges: ₹5000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 1 Free Website worth Rs. 5000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – No Deposit
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 18% Commission from Zauca on All Plans & Services (Strictly No
              Markup)
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Zauca Branding
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – No recurring commission from Zauca or markup on renewal can be
              charged from Customer
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – No Renewal Charges
            </Text>
            <Box pt={10}>
              <Button bg={"#F5B34F"}>BECOME RESELLER</Button>
            </Box>
            {/* </UnorderedList> */}
          </Box>
          {/* </VStack> */}
        </Box>

        <Box pl={10}>
          <Box
            justifyContent={"center"}
            fontSize={30}
            h={"100px"}
            w={"100px"}
            p={"33px"}
            borderRadius={"100%"}
            border={"1.5px solid #45B1F4"}
          >
            <FaRocket color="#45B1F4" />
          </Box>
          <Box pt={5} w={300}>
            <Text fontSize={20} fontWeight={500}>
              Pro Reseller Plan – ₹20000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Subscription Charges: ₹10000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 1 Free Website worth ₹5000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – Refundable Deposit: ₹5000
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 25% Commission from Zauca & 25% Mark up on All Plans & Services
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – White Label Service
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – 25% Recurring Renewal Mark up on All Plans & Services can be
              charged from Customer
            </Text>
            <Text opacity={"0.6"} fontWeight={400}>
              – No Renewal Charges
            </Text>
            <Box pt={10}>

            <Button bg={"#F5B34F"}>BECOME PRO RESELLER</Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Startup;
