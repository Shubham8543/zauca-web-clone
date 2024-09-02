import React from "react";
import { Box, Flex, IconButton, Img, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { wrap } from "framer-motion";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";


function MenuBar() {
  return (
    <Box height={"100%"} m={-1} bg={"pink"}>
      <Flex
        alignItems={"center"}
        bg={"#F9F8F8"}
        p={2}
        w={"100%"}
        justifyContent={"space-between"}
        mt={-2}
        // wrap={"wrap"}
        h={100}
      >
        <Box>
          <Link>
            <Img src="https://www.zauca.com/wp-content/uploads/zauca-website-design.png" />
          </Link>
        </Box>
        <Box>
          <Flex
            fontSize={20}
            gap={3}
            alignItems={"center"}
            wrap={"wrap"}
            w={"100%"}
            display={{ base: "flex", lg: "flex" }}
          >
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>Features</Link>
            </Box>
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>Pricing</Link>
            </Box>
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>Demo</Link>
            </Box>
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>Reviews</Link>
            </Box>
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>Contact</Link>
            </Box>
            <Link to={"/support"}>
              <Box _hover={{ color: "#3CA7E9" }}>
                <Text>Support</Text>
              </Box>
            </Link>

            <Box _hover={{ color: "#3CA7E9" }}>
              <Link> Client Area</Link>
            </Box>
            <Box _hover={{ color: "#3CA7E9" }}>
              <Link>
                <FaShoppingCart icon />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default MenuBar;
