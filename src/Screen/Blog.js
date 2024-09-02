import { Box, Flex, Text, Link, Img, Button, HStack } from "@chakra-ui/react";
import React from "react";

function Blog() {
  return (
    <Box justifyContent={"space-between"} >
      <Box>
        <Text fontSize={40} fontWeight={500} textAlign={"center"}>
          Blog
        </Text>
      </Box>
      <Box p={5} justifyContent={"center"} alignItems={"center"}>
        <Flex justifyContent={"center"} display={{ base: "column", lg: "flex" }}>
          <Box
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px"}
            w={302}
            h={700}
            m={10}
            boxShadow='dark-lg'
          >
            <Box w={300}>
              <Link>
                <Img src="https://www.zauca.com/wp-content/uploads/restaurant-5-star-hotel-website-design-768x549.jpg" />
              </Link>
            </Box>
            <Box w={300} p={5}>
              <Link>
                <Text fontSize={25} pl={5} _hover={{ color: "#435EF6" }}>
                  Restaurant Website Design Cost @ Rs.5800 – Best 5 Star Hotel
                  Website Designer Near Me
                </Text>
              </Link>

              <Text p={5} fontWeight={500} opacity={"0.7"}>
                Restaurant Website Design Cost @ Rs.5800 – Best 5 Star Hotel
                Website Designer Near Me – 1 Free Domain– 5 Page Hosting–
                Business Email id– SEO Ready Website– Mobile Friendly[…]
              </Text>
              <Link p={5} fontSize={19} color={"#3855FC"}>
                Read more
              </Link>
            </Box>
          </Box>

          <Box
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px"}
            w={302}
            h={700}
            m={10}
            boxShadow='dark-lg'
          >
            <Box w={300}>
              <Link>
                <Img src="https://www.zauca.com/wp-content/uploads/website-development-for-tattoo-artists-768x269.jpeg" />
              </Link>
            </Box>
            <Box w={300} p={5}>
              <Link>
                <Text fontSize={25} p={5} _hover={{ color: "#435EF6" }}>
                  Tattoo Studio Website Design Cost @ Rs.5800 – Tattoo Artist
                  Website Designer Near Me
                </Text>
              </Link>
              <Text p={5} fontWeight={500} opacity={"0.7"}>
                Tattoo Studio Website Design Cost @ Rs.5800 – Tattoo Artist
                Website Designer Near Me – 1 Free Domain– 5 Page Hosting–
                Business Email id– SEO Ready Website– Mobile Friendly
                Website–[…]
              </Text>
              <Link p={5} fontSize={19} color={"#3855FC"}>
                Read more
              </Link>
            </Box>
          </Box>

          <Box
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px"}
            w={302}
            h={700}
            m={10}
            boxShadow='dark-lg'
          >
            <Box w={'100%'}>
              <Link>
                <Img src="https://www.zauca.com/wp-content/uploads/build-responsive-website-for-your-event-management-company-600x363.webp" />
              </Link>
            </Box>
            <Box w={320} p={5}>
              <Link>
                <Text fontSize={25} pl={5} _hover={{ color: "#435EF6" }}>
                  Event Management Company Website Design Cost @ Rs.5800 –
                  Eventmanagement Company Website Design
                </Text>
              </Link>
              <Text px={5} fontWeight={500} opacity={"0.7"}>
                Event Management Company Website Design Cost @ Rs.5800 –
                Eventmanagement Company Website Design – 1 Free Domain– 5 Page
                Hosting– Business Email id– SEO Ready Website– Mobile Friendly
                Website– Unlimited[…]
              </Text>
              <Link p={5} fontSize={18} color={"#3855FC"}>
                Read more
              </Link>
            </Box>
          </Box>
        </Flex>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Button bg={"#118AFC"}>SEE ALL BLOG POSTS</Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default Blog;
