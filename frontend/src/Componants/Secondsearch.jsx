import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Searchbar from './Searchbar'


// https://movies-api-v1.onrender.com/swagger-ui/#/


const Secondsearch = () => {


  // javascript
  return (
    <Box>
      <Image w={"90%"} h={"700px"} m={"auto"} mt={"100px"}  src='/Images/bg movie.jpg' />
      <Box position={"absolute"} top={"2%"} left={"20%"} color={"white"} h={"600px"}>
        <Text fontSize={"50px"} fontWeight={'bold'}>Unlimited movies, TV shows and more.</Text>
        <Text fontSize={"18px"} textAlign={"center"} mt={"10px"}>Watch anywhere, you want.</Text>
        <Searchbar/>
      </Box>
    </Box>
  )
}

export default Secondsearch
