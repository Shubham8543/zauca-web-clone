import {
  Box,
  Flex,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Menu,
  Grid,
  Img,
  HStack,
  Button,
  Text,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const navbar = (
    // <Box>
      <Flex
        // display="flex"
        p={3}
        justifyContent="space-evenly"
        flexDirection={{base: 'column',md: 'column', 'lg': 'row'}}
        bg="#066394"
        fontSize={20}
        color="white"
        wrap="wrap"
        w={'100%'}
        // gap={`10px`}
      >
        <Link to="/home">
          <Box>Home</Box>
        </Link>
        <Menu>
          <MenuButton >Store</MenuButton>
          <MenuList color="black">
            <Link to="/Browse_all">
              <MenuItem>Browse All</MenuItem>
            </Link>
            <Link to="/Business_website">
              <MenuItem>Business Website</MenuItem>
            </Link>
            <Link to="/e-Commerce_website">
              <MenuItem>e-Commerce website</MenuItem>
            </Link>
            <Link to="/Register_new_Domain">
              <MenuItem>Register a New Domain</MenuItem>
            </Link>
            <Link to="/Transfer_Domain">
              <MenuItem>Transfer Domain to Us</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Link to="/Announcements">
          <Box _hover={{ opacity: "0.5",  }}>Announcements</Box>
        </Link>
        <Link to="/knowledgebase">
          <Box _hover={{ opacity: "0.5",  }}>Knowledgebase</Box>
        </Link>
        <Link to="/Network_status">
          <Box _hover={{ opacity: "0.5",  }}>Network Status</Box>
        </Link>
        <Link to="/Contact_us">
          <Box _hover={{ opacity: "0.5",  }}>Contact Us</Box>
        </Link>
        <Menu>
          <MenuButton _expanded={{ bg: "blue.400" }}>Account</MenuButton>
          <MenuList color="black">
            <Link to="/Login">
              <MenuItem>Login</MenuItem>
            </Link>
            <Link to="/Register">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/Forgot_Password">
              <MenuItem>Forgot Password</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    // </Box>
  );

  return (
    <Box>
      <Flex justifyContent="space-between"  p={4}    flexDirection={{lg:'row', md:'column', base:'row'}} w={'100%'}>
        <Link to="/">
          <Box  p={4}>
            <Img src="https://clients.zauca.com/assets/img/logo.jpg" w={{base: 50, lg: 200, md: 200 , sm: 100}}/>
          </Box>
        </Link>
        <Box display={{lg: 'flex', md: 'row', base: 'row'}} gap={5} alignItems={'center'}>
        {/* <HStack spacing={4} mr={10}> */}
        <Box >
          <Select  border="none" fontSize={15}>
            <option>English</option>
            <option>Hindi</option>
            <option>Hrvatski</option>
            <option>Nederlands</option>
            <option>العربية</option>
            <option>Русский</option>
            <option>Türkçe</option>
            <option>Українська</option>
            <option>Svenska</option>
          </Select>
          </Box>
          <Link to="/Login">
          <Box>

            <Text pr={5} fontSize={15}>Login</Text>
          </Box>
          </Link>
          <Link to="/Register">
          <Box>

            <Text fontSize={15}>Register</Text>
          </Box>
          </Link>
          <Link to="/cart">
            <Button  color="white" bg="#066394">View Cart</Button>
          </Link>
        {/* </HStack> */}
        </Box>
       
      </Flex>


      {!isDesktop && (
          <IconButton
            // colorScheme="teal"
            size="sm"
            variant="ghost"
            aria-label="Open menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            // size="lg"
          />
        )}

      {isDesktop ? (
        <Box display="flex" flexDirection="column">
          {navbar}
        </Box>
      ) : (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex flexDirection={'column'}>

              {navbar}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

export default Navbar;
