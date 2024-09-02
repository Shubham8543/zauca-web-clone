import { Box, Flex, HStack, Text, VStack, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { FaGlobeAsia, FaSearchPlus } from "react-icons/fa";
import { MdOutlineCurrencyRupee, MdPhoneIphone } from "react-icons/md";

function Things() {
  return (
    <Box p={10} mx="auto" maxW="container.xl">
      <Box textAlign="center" mb={10}>
        <Text fontSize="4xl" fontWeight="bold">
          A few things we’re great at
        </Text>
      </Box>
      
      <VStack spacing={10} align="flex-start">
        <Stack spacing={8} direction={{ base: "column", lg: "row" }}>
          <Box p={5} flex="1">
            <HStack spacing={4}>
              <Box border="4px solid #FDB64D" borderRadius="full" p={5}>
                <FaGlobeAsia fontSize="3xl" color="#FDB64D" />
              </Box>
              <Text color="#FDB64D" fontWeight="500" fontSize="xl">
                WEBSITE DESIGN
              </Text>
            </HStack>
            <Text mt={4}>
              Here at Zacua Website Design, we have provided website design to
              more than 5,900+ businesses across hundreds of industry sectors.
              Based in the IT hub of India, we pride ourselves on our exquisite
              website design skills.
            </Text>
            <Text mt={4}>
              A creative Agency with top marks for impressive website design in
              India. We believe aesthetics is important in website design and so
              far are considered a leading website design agency in India.
            </Text>
          </Box>

          <Box p={5} flex="1">
            <HStack spacing={4}>
              <Box border="4px solid #FDB64D" borderRadius="full" p={5}>
                <MdPhoneIphone fontSize="3xl" color="#FDB64D" />
              </Box>
              <Text color="#FDB64D" fontWeight="500" fontSize="xl">
                ANDROID APPLICATION DEVELOPMENT
              </Text>
            </HStack>
            <Text mt={4}>
              Zauca is a leading Android application development company across
              the globe. Considering today’s scenario, 70% of the world’s smart
              phones run on the Android platform, and that only indicates how vital
              it is to have an Android application for your business. We will provide
              a quick analysis and free proposal for it. Don’t worry, it is secure
              and confidential. As a leading Android App Development Company, we
              ensure that you will get a high-quality Android application by which
              you can expand your business.
            </Text>
          </Box>
        </Stack>

        <Stack spacing={8} direction={{ base: "column", lg: "row" }}>
          <Box p={5} flex="1">
            <HStack spacing={4}>
              <Box border="4px solid #FDB64D" borderRadius="full" p={5}>
                <FaSearchPlus fontSize="3xl" color="#FDB64D" />
              </Box>
              <Text color="#FDB64D" fontWeight="500" fontSize="xl">
                DIGITAL MARKETING
              </Text>
            </HStack>
            <Text mt={4}>
              Digital Marketing (SEO) India - An honest & results-driven digital
              marketing agency. Zauca is a digital marketing agency based in India.
              Our honest and transparent digital marketing work speaks for itself.
              We deliver a personal, passionate & tailored service to each and every
              one of our clients, big or small, based in India or abroad.
            </Text>
          </Box>

          <Box p={5} flex="1">
            <HStack spacing={4}>
              <Box border="4px solid #FDB64D" borderRadius="full" p={5}>
                <MdOutlineCurrencyRupee fontSize="3xl" color="#FDB64D" />
              </Box>
              <Text color="#FDB64D" fontWeight="500" fontSize="xl">
                AD NETWORK SETUP
              </Text>
            </HStack>
            <Text mt={4}>
              Zauca will assist you in setting up Ad Networks which can help you earn
              money. If you have a website or a blog, then Ad Network has money to
              give you. It’s called Ad Serving, and it’s a program that literally makes
              everyone a winner, provided you follow the terms and conditions of Ad
              Network religiously.
            </Text>
          </Box>
        </Stack>
      </VStack>

      <Flex
        bg="#0693e3"
        color="white"
        direction="column"
        align="center"
        justify="center"
        p={10}
        mt={20}
        textAlign="center"
        borderRadius="md"
      >
        <Text fontSize={{ base: "2xl", lg: "4xl" }} mb={4}>
          Get your website up & running in just 30 minutes
        </Text>
        <Button
          bg="#FDB64D"
          color="white"
          p={6}
          fontSize={{ base: "lg", lg: "2xl" }}
          _hover={{ bg: "#fbbd5f" }}
        >
          Get Started – Click 2 Call
        </Button>
      </Flex>
    </Box>
  );
}

export default Things;
