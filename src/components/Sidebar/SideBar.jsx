import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { text } from "framer-motion/client";
import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      name: "Home",
      link: "/",
      text: "Home",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Jhon Deo" src="/profilepic.png" />,
      name: "profile",
      link: "/asaprogrammer",
      text: "Profile",
    },
  ];

  return (
    <Flex direction={"column"} gap={10} w={"full"} height={"100vh"} borderRight={"1px solid"}  
    borderColor={"whiteAlpha.300"} position={"sticky"} top={0} left={0} px={{ base: 2, md: 3 }}>
      <Box
        
      >
        {/* Desktop view  */}
        <Box display={{ base: "none", md: "block" }}>
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            cursor={"pointer"}
            display={"flex"}
            justifyContent={"center"}
          >
            <InstagramLogo />
          </Link>
        </Box>
        {/* Mobile view  */}
        <Box display={{ base: "block", md: "none" }} marginLeft={"7px"}>
          <Link
            to={"/"}
            as={RouterLink}
            p={2}
            cursor={"pointer"}
            borderRadius={6}
            _hover={{
              bg: "whiteAlpha.200",
            }}
            w={10}
            display={"flex"}
            justifyContent={"center"}
          >
            <InstagramMobileLogo />
          </Link>
        </Box>
      </Box>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: "full", md: "none" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {item.icon}
              <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
            </Link>
          </Tooltip>
        ))}
      </Flex>
      <Tooltip
        hasArrow
        label={"Logout"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Link
          display={"flex"}
          to={"/auth"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: "full", md: "none" }}
          mt={"auto"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <BiLogOut />
          <Box display={{ base: "none", md: "block" }}>Logout</Box>
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default SideBar;
