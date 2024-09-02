import {
  background,
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Portfolio() {
  return (
    <Box  >
      <Box
        textAlign={"center"}
      
        // justifyContent={"center"}
        // pl={"100px"}
        // pr={"100px"}
        // pt={"50px"}
      >
        <Text fontSize={30} fontWeight={600} p={5}>
          Portfolio
        </Text>
        <Text fontSize={18} fontWeight={300}  >
          With the Internet spreading like wildfire and reaching every part of
          our daily life, more and more traffic is directed to websites in
          search for information.
        </Text>
      </Box>
      <Flex   wrap="wrap" justifyContent={"center"} >
        <VStack >
          <HStack display={{ base: "column", lg: "flex" }}   >
            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/portfolio20.png" />
                </Link>
              </Box>
              <Text fontWeight={599}>Empirical Strategy, USA</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                Corporate Strategy in Lakecity, USA, Business Unit Strategy,
                Lake City, Privaty Equity Business Website, Strategy Realisation
                Website Design, Business Analytics Website Design in USA
              </Text>
            </Box>

            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/2018/01/portfolio3.png" />
                </Link>
              </Box>
              <Text fontWeight={599}>Ria Institute, Bangalore</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                Training Institute Web Design in Bangalore, Website Design for
                Training Institute, Low Cost Website Design India for Coaching
                Institute, Affordable Website Design Company, Training Institute
                Website
              </Text>
            </Box>

            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/xrmroi.png" />
                </Link>
              </Box>
              <Text fontWeight={599}>XRM ROI, Australia</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                Business consulting Web Design in Australia, Website Design for
                Staffing, Low Cost Website Design Australia for Business
                Automation, Affordable Website Design , Application development
                Website design
              </Text>
            </Box>
          </HStack>

          <HStack display={{ base: "column", lg: "flex" }} px={10}>
            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/richal-forex.png" />
                </Link>
              </Box>
              <Text fontWeight={599}>Richal Forex, New Zeland</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                Finance Consultant Web Design in New Zeland, Website Design for
                Forex, Low Cost Website Design New Zeland for Investment
                banking, Affordable Website Design Company, Foreing Exchange
                Website Design
              </Text>
            </Box>

            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/engless-concepts.png" />
                </Link>
              </Box>
              <Text fontWeight={599}>Engless Concepts – Tanzania</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                Interior Design Web Design in Tanzania, Website Design for
                Woodworks, Low Cost Website Design India for Furniture store,
                Affordable Website Design Company, Interior Design Company
                Website Design
              </Text>
            </Box>

            <Box w={301} textAlign={"center"} bg={"pink"} border={"1px"} m={5}>
              <Box w={300} h={270}>
                <Link>
                  <Img src="https://www.zauca.com/wp-content/uploads/ecommerce-website-design.jpg" />
                </Link>
              </Box>
              <Text fontWeight={599}>eCommerce Website Demo</Text>
              <Text p={5} fontStyle={"italic"} fontSize={13}>
                eCommerce Website Design, e Commerce website development cost,
                wordpress ecommerce website development, grocery delivery
                website development, food delivery website demo, tour packages &
                travel booking website development, multivendor website
                development cost, customized website development cost
              </Text>
            </Box>
          </HStack>
          <Box>
            <Button bg={"#F7A830"}>Ask for More Portfolio by Zauca</Button>
          </Box>
        </VStack>

        {/* REAL Client Testimonials */}
<Box >
        <Box>
          <Text
            pt={"200px"}
            fontWeight={600}
            textAlign={"center"}
            fontSize={{base:'30px',lg:'40px'}}
            
          >
            REAL Client Testimonials
          </Text>
          <Text fontWeight={300} fontSize={{base:"20px",lg:"30px"}} textAlign={"center"}mx={10} >
            Don’t take our word for it – here’s what our clients say:
          </Text>
        </Box>
        <Flex justifyContent={'space-evenly'}>
          <VStack p={10}>
            <HStack  display={{ base: "column", lg: "flex" }}  >
              <Box
                w={400}
              
                textAlign={"center"}
                // alignItems={"center"}
                // justifyContent={"center"}
                // justifyItems={"center"}
                pt={10}
              >
                <Text fontSize={20} mx={10}>
                  Very good support provided by the team. i really appreciate
                  the efforts done by the team.. Very good service. Would rate
                  it 5out of 5.
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img
                    justifyItems={"center"}
                    src="data:image/webp;base64,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"
                  />
                </HStack>
                <Text fontWeight={800}>Sumit Malhotra</Text>
                <Text fontStyle={"italic"}>Softtouch Tissues Inc. Noida</Text>
              </Box>

              <Box
                w={400}
                textAlign={"center"}
                // alignItems={"center"}
                // justifyContent={"center"}
                // justifyItems={"center"}
                pt={10}
              >
                <Text fontSize={20} mx={10}>
                  Successfully completed my website which is amazing work. I
                  like it, very helpful and ready to solve your write-ups issue.
                  I will give them 100/100
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img justifyItems={"center"} />
                  <Img src="data:image/webp;base64,UklGRpoDAABXRUJQVlA4TI4DAAAvO8AOEC/jKpJsV5lHTgrwrwcjfGU49+7uscEokiRFdYwCzr+js4EvnN0BRpEkKapjFHD+HZ0NfOHsDsC1bet4dWLbZpuRzraTF0iZJ0qnMrXN2qlY+tr2DQCAf+C1I/4ANPAOfADvwD9wC7wDn8Ar8A48A4/AM7ABnoFXYAv8ABcC0srstcGzFIXWZi92T7c7U2Z3QLlE4jNnoCyta4hIlVsiyqUs7R2RmKp5qYJVYSmK6sjZP0SwlRKswJgI36ooXO/nuSLirc3EXZayTVWpH/fdS0qe//9Dw7VUJXL/WEdMKYpjw+Ankmqzq7gXUhQL/b8G8DQoKiUkEY9SpUkVnDMcus53v67OSAlsZqj/H/5F+ETM7S4EmjYLRhW+3wcyO5+qgqguZPayAsNULV/m+eq6LKPbuuYe2wa/soR1RPL3fTpAAQnati1K9b22lIH+NA42aeeM3UWcIewDqPtfxMT//T8biOj/BBCzubi5c3Jzf397vLe1nIySxpmzJpz9brcPZ90qpjJ6PH8BeLEq+ZyRThu5fNl6AfB5vhxV9/yHN6sQF5LxvPUGPBWjahq/qJbTgjVdrgKPyxkFP0PVglCYfwGOZ9h+3ypCcaWD6hKP+XebFcrT5+gWORp/FaFlpYddU8r8WBWa5j5xIPVlCG2NT2xLfGeFxtkONn39rAqtjX5vzUejJDQv4DXmdSq0P8K1x3NcP1HFhtuKGMAcmi7PYiDPseFYGIxs95uIGmJALZhEqUHJ4j9RgK1S8codHh0V4lLi8Y9MwVxu48mt1IazexSXKQxRgqdQBfDgMF7gXTck4p+1aY7VFzgd+4B9WN5/dKAlIe5+wgxluD8IYaFTFs71LgCsS1R+JxlWrfO62xEe08I9z5H7G2NwVgDc7sMSPm+BlpB9H2ESHaCNc+E3W6/mpP4JbhvAnVB9z9YC7LiyixEuG3gQ6sYG6WSSq6XFaZjL1uJymqulxdUsl61FLTZAI0QBppYOC0RJJluHNaI5ppYOJhGFeGwNwkREs4Oy6KAAS0tdiFxnWWx1UTcKc7SVRchzbljOANBJqxiLeVFKIp4ttwGgms/G2WbIb8TfE3yec02R/6Cv1ULes2AwhUgyNulHfZCkM5P6BEw5igV1CRFvRI8p4k4NqxubIf75sKpIhpQmAiqCUVKeCHGFo6TlfDIoF0xlSF8zkQwHxkdHRkYnApFklLgB" />
                </HStack>
                <Text fontWeight={800}>Rammilan Gupta</Text>
                <Text fontStyle={"italic"}>Rmilan Interics, Thane</Text>
              </Box>

              <Box
                w={400}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                justifyItems={"center"}
                pt={10}
              >
                <Text fontSize={20} mx={10}>
                  Got the Website Live within 12 Hours. Excellent Work with
                  affordable rates. We have done 2 websites for our different
                  companies in no more than 2 days.
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img justifyItems={"center"} />
                  <Img src="data:image/webp;base64,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" />
                </HStack>
                <Text fontWeight={800}>Sumit Malhotra</Text>
                <Text fontStyle={"italic"}>Softtouch Tissues Inc. Noida</Text>
              </Box>
            </HStack>
            <HStack  display={{ base: "column", lg: "flex" }}>
              <Box
                w={400}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                justifyItems={"center"}
                pt={10}
              >
                <Text fontSize={20} mx={10}>
                  Very reasonable price compared in market…. awsome customer
                  experience… cheers guys
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img justifyItems={"center"} />
                  <Img src="data:image/webp;base64,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" />
                </HStack>
                <Text fontWeight={800}>Ramesh R</Text>
                <Text fontStyle={"italic"}>RR Indian Exports, Nellore</Text>
              </Box>

              <Box
                w={400}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                justifyItems={"center"}
                pt={10}
              >
                <Text fontSize={20} mx={10}>
                  Amazing experience..very helpful and the most important, real
                  time services are here.Thanks for the support.
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img justifyItems={"center"} />
                  <Img src="data:image/webp;base64,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" />
                </HStack>
                <Text fontWeight={800}>HR Manager</Text>
                <Text fontStyle={"italic"}>KSA Recruiters, New Delhi</Text>
              </Box>

              <Box
                w={400}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                justifyItems={"center"}
                pt={10}
                
              >
                <Text fontSize={20}>
                  I got the website designed for my start-up from Zauca. From
                  the day I decided to go with Zauca…Read More on Google Reviews
                </Text>
                <HStack alignItems={"center"} justifyContent={"center"} p={5}>
                  <Img justifyItems={"center"} />
                  <Img src="data:image/webp;base64,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" />
                </HStack>
                <Text fontWeight={800}>Ravi B</Text>
                <Text fontStyle={"italic"}>
                  Skillify Technologies, Bangalore
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Flex>
          </Box>
      </Flex>
    </Box>
  );
}

export default Portfolio;
