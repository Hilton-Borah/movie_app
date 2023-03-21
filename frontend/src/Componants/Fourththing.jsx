import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ForuthCrousal from './ForuthCrousal'

const Fourththing = () => {
  return (
    <Box w={"80%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} m={"auto"}>
      <Box  w={"50%"}>
        <Text fontSize={"50px"} fontWeight={"bold"} color={"white"}>Watch everywhere.</Text>
        <Text fontSize={"18px"} w={"70%"} mt={"10px"} color={"white"}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Text>
      </Box>
      <Box  w={"50%"} padding={"50px"}>
        <Image w={"100%"} borderRadius={"10px"} src='./Images/avatar-_the_way_of_water-sixteen_nine.webp'/>
        {/* <ForuthCrousal start={6} end={11}/>  
        <ForuthCrousal start={7} end={12}/>
        <ForuthCrousal start={8} end={13}/> */}
      </Box>
    </Box>
  )
}

export default Fourththing
