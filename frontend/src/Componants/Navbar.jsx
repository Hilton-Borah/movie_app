import React, { useState } from 'react'
import {  Box, Button, Divider, Flex, Image, Text, Menu,
  MenuButton,
  MenuList,
  MenuItem, } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs";
import {CgProfile} from "react-icons/cg"
import {SiGnuprivacyguard} from "react-icons/si";
import {AiOutlineLogin} from "react-icons/ai";
import {AiOutlinePoweroff} from "react-icons/ai"
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();


  const handleMovieAll =()=>{
    navigate("/movie/popular")
  }

  const handleTcv=()=>{
    navigate("/tv")
  }

  const handleToprated=()=>{
    navigate("/movie/top_rated")
  }

  return (
    <Box p={"20px"} position={"fixed"} top={"0"} zIndex={"9"}  color={"white"} display={"flex"} justifyContent={'space-between'} alignItems={'center'} w={'100%'} m={"auto"} pl={"50px"} pr={"50px"} mb={"50px"} bgColor={"black"} borderBottom={'0.5px solid rgb(50, 50, 50)'}>

      <Link to={"/"}><Image src='https://user-images.githubusercontent.com/103739534/226175925-29f44128-59d8-4660-8a73-b5069cd5bb18.png' w={"30%"}/>
      </Link>
      <Box display={"flex"} justifyContent={"space-between"} w={"40%"} alignItems={'center'}>
        <Text cursor={"pointer"} onClick={handleMovieAll}>Movies</Text>
        <Text cursor={"pointer"} onClick={handleTcv}>Tv shows</Text>
        <Text cursor={"pointer"} onClick={handleToprated}>Top IMDB</Text>
        <Text>Categories</Text>
        <Menu>
          <MenuButton variant={"unstyled"} as={Button} rightIcon={<BsChevronDown fontSize={"10px"} fontWeight={"semibold"}/>}>
            Join with us
          </MenuButton>
          <MenuList color={"white"} bgColor={"black"} textAlign={'center'}>
            <MenuItem color={"white"} bgColor={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"} margin={'auto'} gap={"10px"}><CgProfile />My profile</MenuItem>
            <MenuItem color={"white"} bgColor={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"} margin={'auto'}><SiGnuprivacyguard />Register</MenuItem>
            <MenuItem color={"white"} bgColor={"black"} textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} margin={'auto'}><AiOutlineLogin />Login</MenuItem>
            <MenuItem color={"white"} bgColor={"black"} textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} margin={'auto'}><AiOutlinePoweroff />Log out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Navbar
