import { background, Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import React from "react";
import { color } from "framer-motion";

const Header = () => {
  return (
    <Flex
      w={{ base: "auto", md: "100%" }}
      borderWidth="2px"
      bg={"black"}
      p={2}
      wrap={"wrap"}
      direction={"row"}
      justifyContent={"space-between"}
      sticky={"sticky"}
    >
      <Flex color={"white"} alignItems={"Center"} gap={2} wrap={"wrap"} >
        <MdCall />
        <Text color={"white"} fontSize={"14"}>
          18002129495
        </Text>

        <IoMdMail />
        <Text color={"white"} fontSize={"14"}>
          support@zauca.in
        </Text>
      </Flex>

      <Flex gap={2} size={20} color={"white"} wrap={'wrap'}>
        <Link>
          <FaWhatsappSquare size={20} />
        </Link>

        <Link>
          <FaFacebookSquare size={20} />
        </Link>

        <Link>
          <FaTwitterSquare size={20} />
        </Link>
        <Link>
          <FaInstagramSquare size={20} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
