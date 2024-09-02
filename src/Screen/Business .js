import { Flex, Box, Text, Img, VStack, Stack } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";

function Business() {
  return (
    <Box 
    flexDirection={{base: 'column',md: 'column', 'lg': 'row'}}
    >
      <Box textAlign={"center"} justifyContent={"center"}>
        <Text fontSize={40}>Business Website Design Price</Text>
        <Text fontSize={20}>
          Zauca is India’s most affordable, low cost web design company in India
          offering website designing with Unbeatable “Pricing”
        </Text>
      </Box>
      <Flex justifyContent={"space-evenly"} pb={10} pt={14} wrap={"wrap"}
        flexDirection={{base: 'column',md: 'column', 'lg': 'row'}}
        >
        <Box>
          <Img src="https://www.zauca.com/wp-content/uploads/2017/10/cropped-planBasic.png" />
          <Box pl={5}>
            <UnorderedList>
              <Text p={5} fontWeight={700}>
                Basic Plan – ₹7800
              </Text>
              <Text opacity={"0.5"} fontWeight={450}>– 1 Free Domain Name </Text>
              <Text opacity={"0.5"} fontWeight={700}>– 10 Page (Dynamic Website)</Text>
              <Text opacity={"0.5"} fontWeight={450}>– Business Email id (Webmail)</Text>
              <Text opacity={"0.5"} fontWeight={450}>– Unlimited Images & Videos</Text>
              <Text opacity={"0.5"} fontWeight={450}>– Unlimited (Bandwidth/ Space)</Text>
              <Text opacity={"0.5"} fontWeight={450}>– 100% Responsive Website</Text>
              <Text opacity={"0.5"} fontWeight={700}>– Live Chat Integration</Text>
              <Text opacity={"0.5"} fontWeight={700}>– Payment Gateway Integration</Text>
              <Text opacity={"0.5"} fontWeight={700}>– Social Media Integration</Text>
              <Text opacity={"0.5"} fontWeight={450}>– 24/7 Support (<b>SLA</b>: 48 Hours)</Text>
              <Text opacity={"0.5"} fontWeight={450}>– Annual Renewal ₹3000</Text>
            </UnorderedList>
            <Text pt={5} opacity={'0.5'} fontWeight={500}>Note: GST @ 18% Applicable on All Purchase</Text>
            <Link pt={"5px"}>Get Quote Now</Link>
          </Box>
        </Box>

        <Box>
          <Img src="https://www.zauca.com/wp-content/uploads/2017/11/planStandard.png" />
          <Box pl={5}>
            <UnorderedList>
              <Text p={5} fontWeight={700}>
                Classic Plan – ₹8800
              </Text>
              <Text opacity={'0.5'} fontWeight={450}>– 1 Free Domain Name</Text>
              <Text opacity={'0.5'} fontWeight={700}>– UL (15) Pages* (Dynamic Website)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Business Email id (Webmail)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Unlimited Images & Videos</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Unlimited (Bandwidth/ Space)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– 100% Responsive Website</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Live Chat Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Payment Gateway Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Social Media Integration</Text>
              <Text opacity={'0.5'} fontWeight={700}>– WhatsApp Integration</Text>
              <Text opacity={'0.5'} fontWeight={700}>– SSL Certificate</Text>
              <Text opacity={'0.5'} fontWeight={450}>– 24/7 Support (<b>SLA</b>: 24 Hours)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Annual Renewal ₹4000 </Text>
            </UnorderedList>
            <Text pt={5} fontWeight={500} opacity={'0.5'}>Note: GST @ 18% Applicable on All Purchase</Text>
            <Link>Get Quote Now</Link>
          </Box>
        </Box>

        <Box>
          <Img src="https://www.zauca.com/wp-content/uploads/2017/10/planPremium.png" />
          <Box pl={5}>
            <UnorderedList>
              <Text p={5} fontWeight={700}>
                Premium Plan – ₹14300
              </Text>
              <Text opacity={'0.5'} fontWeight={450}>– 1 Free Domain Name</Text>
              <Text opacity={'0.5'} fontWeight={450}>– UL (20) Pages* (Dynamic Website)</Text>
              <Text opacity={'0.5'} fontWeight={700}>– Unlimited Email id (Webmail/ Outlook)</Text>
              <Text opacity={'0.5'} fontWeight={700}>– Android Application*</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Unlimited Images & Videos</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Unlimited (Bandwidth/ Space)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– 100% Responsive Website</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Live Chat Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Payment Gateway Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Social Media Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– WhatsApp Integration</Text>
              <Text opacity={'0.5'} fontWeight={450}>– SSL Certificate</Text>
              <Text opacity={'0.5'} fontWeight={700}>– cPanel* Access</Text>
              <Text opacity={'0.5'} fontWeight={450}>– 24/7 Support (SLA: 12 Hours)</Text>
              <Text opacity={'0.5'} fontWeight={450}>– Annual Renewal ₹5000</Text>
            </UnorderedList>
            <Text pt={5} opacity={'0.5'} fontWeight={500}>Note: GST @ 18% Applicable on All Purchase</Text>
            <Link>Get Quote Now</Link>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Business;
