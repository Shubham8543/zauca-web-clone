import {
  Flex,
  Text,
  Box,
  HStack,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { FaAddressCard } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";

import React from "react";

function Gst() {
  return (
    <Box justifyContent={"center"} >
      <Box p={10}>
        <Text textAlign={"center"} fontSize={35} p={5} fontWeight={500}>
          GST & Establishment Registration
        </Text>
        <Text textAlign={"center"} fontSize={"20"} fontWeight={300}>
          Online Documents submission and hassle-free GST Registration in 3 days
        </Text>
        <Text
          textAlign={"center"}
          fontSize={20}
          fontWeight={300}
          pt={10}
          pl={14}
          pr={14}
        >
          Why GST Registration? You can get yourself registered under GST if
          your annual turnover is more than Rs. 40 lakhs. Also, if you are doing
          online business (selling through amazon, flipkart etc.), you are
          required to get a GST number. For registering under GST, you need the
          following documents
        </Text>
        <Flex justifyContent={'center'} wrap={'wrap'}>
        <Box w={600} border={"1px"} p={5} mt={5} ml={10}>
          <HStack>
            <FaAddressCard fontSize={50} color="#FDB64D" />
            <Text color={"#FDB64D"} fontWeight={500}>
              Sole Proprietor – Rs. 1500
            </Text>
          </HStack>
          <UnorderedList opacity={'0.5'} fontWeight={450} >
            <Text pt={'5'}>1. Trade Name</Text>
            <Text>2. Nature of Service</Text>
            <Text>3. Pan Card</Text>
            <Text>4. Aadar Card</Text>
            <Text>5. Passport Size Photo</Text>
            <Text>
              6. Proof of business place (Rental Agreement/ Electricity Bill/
              Municipal Tax Paid Receipt)
            </Text>
            <Text>7. Cancelled Cheque (Savings or Current Account)</Text>
          </UnorderedList>
          <Box p={10}>
            <Button bg={"#46BDF9"}>Enquiry Now</Button>
          </Box>
        </Box>
        <Box w={600} border={"1px"} p={5} mt={5} ml={10}>
          <HStack>
            <GiIndiaGate fontSize={50} color="#FDB64D" />
            <Text color={"#FDB64D"} fontWeight={500}>
              Shops and Establishments Registration – Rs.1999
            </Text>
          </HStack>
          <Text pt={5} opacity={'0.6'} fontWeight={'450'}>
            The Shops and Establishments Act regulates conditions of work, lists
            rights of employees in the unorganised sector and provides a list of
            obligations for every employer. It applies nationwide to shops,
            commercial establishments, hotels, restaurants, eating houses,
            theatres and other places of public amusement or entertainments.
            Every shop and establishment is required to register itself under
            the Act within 30 days of commencement of work, whether or not it
            has employees.
          </Text>

          <Box p={10}>
            <Button bg={"#46BDF9"}>Enquiry Now</Button>
          </Box>
        </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Gst;
