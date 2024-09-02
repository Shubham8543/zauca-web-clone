import {
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  InputLeftAddon,
  Checkbox,
  Box,
  FormLabel,
  Button,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RxComponent2 } from "react-icons/rx";
import { ImLocation } from "react-icons/im";
import { GiSevenPointedStar } from "react-icons/gi";
import { GiTreeFace } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

function Register() {
  return (
    <>
      <Navbar />
      <HStack
        justifyContent={"center"}
        borderBottom={"1px"}
        p={5}
        wrap={"wrap"}
        
      >
        <Text fontSize={"40"} color={"#074B80"}>
          Register
        </Text>
        <Text fontSize={30} mt={3} opacity={"0.5"}>
          Create an account with us . . .
        </Text>
      </HStack>
      {/* <HStack justifyContent={"center"}>
        <Link>
          <Text>Portal Home</Text>{" "}
        </Link>
        <Text>Register</Text>
      </HStack> */}
      <Flex justifyContent={"center"} opacity={"0.7"} w={"100vw"} flexDirection={{"lg": "row", "md": "column", "base": "column"}}>
        <VStack p={5}>
          <FormControl justifyContent={"center"}  >
            <HStack justifyContent={"center"} wrap={"wrap"}>
              <Text fontSize={"20"} color={"#074B80"}>
                Personal Information
              </Text>
            </HStack>
            <HStack p={5} wrap={"wrap"}>
              <InputGroup w={400}>
                <InputLeftElement>
                  <FaUser />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="First Fame" />
              </InputGroup>

              <InputGroup w={400}>
                <InputLeftElement>
                  <FaUser />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Last Name" />
              </InputGroup>
            </HStack>
            <HStack p={5} wrap={"wrap"}>
              <InputGroup w={400}>
                <InputLeftElement>
                  <IoMdMail size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Last Name" />
              </InputGroup>
              <InputGroup w={400}>
                <InputLeftAddon fontWeight={500}>+91</InputLeftAddon>

                <Input border={"1px"} w={400} placeholder="Phone Number" />
              </InputGroup>
            </HStack>
            <HStack justifyContent={"center"}  w={'100%'}
            flexDirection={{"lg": "row", "md": "column", "base": "column"}}>
              <Text fontSize={"20"} color={"#074B80"}>
                Billing Address
              </Text>
            </HStack>
            <HStack justifyContent={"center"} pt={5}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <RxComponent2 size={"20"} />
                </InputLeftElement>
                <Input
                  border={"1px"}
                  w={400}
                  placeholder="Company Name (Optional)"
                />
              </InputGroup>

              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <RxComponent2 size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Street Address" />
              </InputGroup>
            </HStack>
            <HStack pt={10} ml={5} w={'100%'}     flexDirection={{"lg": "row", "md": "column", "base": "column"}}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <ImLocation size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={810} placeholder="Street Address 2" />
              </InputGroup>
            </HStack>
            <HStack justifyContent={"space-evenly"} p={10}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <RxComponent2 size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={250} placeholder="City" />
              </InputGroup>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <GiTreeFace size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={250} placeholder="----" />
              </InputGroup>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <GiSevenPointedStar size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={250} placeholder="Pin Code" />
              </InputGroup>
            </HStack>

            <HStack justifyContent={"center"}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <FaGlobe size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={810} placeholder="Street Address 2" />
              </InputGroup>
            </HStack>
            <HStack justifyContent={"center"} pt={5}>
              <Text fontSize={"20"} color={"#074B80"}>
                Additional Information
              </Text>
            </HStack>
            <HStack justifyContent={"center"}>
              <Text fontStyle={"italic"}>
                (required fields are marked with *)
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"} pt={5}>
              <Box>
                <Text>GST @ 18% Charge as per RCM</Text>
                <Checkbox></Checkbox>
              </Box>
              <Box>
                <FormLabel>
                  GST Number
                  <Input w={400} pl={2} border={"1px"} type="text" />
                </FormLabel>
              </Box>
            </HStack>
            <HStack ml={5} pt={5}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <CiCreditCard1 size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Street Address 2" />
              </InputGroup>
            </HStack>
            <HStack justifyContent={"center"} pt={5}>
              <Text fontSize={"20"} color={"#074B80"}>
                Account Security
              </Text>
            </HStack>
            <HStack pt={5} justifyContent={"space-between"}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <FaLock size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Password" />
              </InputGroup>

              <InputGroup w={"1000"}>
                <InputLeftElement>
                  <FaLock size={"20"} />
                </InputLeftElement>
                <Input border={"1px"} w={400} placeholder="Confirm Password" />
              </InputGroup>
            </HStack>

            <HStack pt={5} justifyContent={"space-between"}>
              <InputGroup w={"1000"}>
                <InputLeftElement>
                  {/* <FaLock size={"20"} /> */}
                </InputLeftElement>
                {/* <Input border={"1px"} w={400} placeholder="Password" /> */}
                <Button bg={"white"} border={"1px"}>
                  Generate Password
                </Button>
              </InputGroup>

              <InputGroup w={"1000"}>
                <Text>Password Strength: Enter a Password</Text>
              </InputGroup>
            </HStack>
            <Box pt={5}>
              <Box bg={"#F2F2ED"} pt={5} p={5}>
                <Text fontSize={"20"}>Join our mailing list</Text>
                <Text w={"700px"} fontWeight={500}>
                  We would like to send you occasional news, information and
                  special offers by email. To join our mailing list, simply tick
                  the box below. You can unsubscribe at any time.
                </Text>
                {/* <FormLabel htmlFor="isRequired">isRequired:</FormLabel> */}
                <Switch id="isRequired" isRequired />
              </Box>
            </Box>
          </FormControl>
        </VStack>
      </Flex>
    </>
  );
}

export default Register;
