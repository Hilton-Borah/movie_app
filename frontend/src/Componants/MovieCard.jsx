import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

const MovieCard = ({ id, title, poster_path, release_date,original_language}) => {
  // const location = useLocation();
  // const navigate = useNavigate()
  // console.log(title)
  // console.log(id,title)

  // const handleNavigate=()=>{
  //   console.log("jh")
  //   navigate({pathname:`/${title}/details/${id}`, albal: { from: location.pathname }})
  //   // return <Navigate to={`/${title}/details/${id}`} state= {{ prev: location.pathname }}/>
  // }

 const image = "https://image.tmdb.org/t/p/original";
  return (
    // <Link to={{pathname:`/${title}/details/${id}`, state: { prevPath: location.pathname }}}>
    <Box key={id} color={"white"} borderRadius={"10px"} cursor={"pointer"} _hover={{color:"lightblue"}}>
      <Image src={image+poster_path} alt={image} w={"100%"} h={"80%"} borderRadius={"10px"}/>
      <Text p={"10px"} fontWeight={"bold"}>{
        title.length>18 ? title.substring(0,18)  + "..." : title
      }</Text>
      <Box pl={"10px"}  pr={"10px"}  display={"flex"}justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"12px"}>{release_date}</Text>
        <Text border={"1px solid lightgray"} pl={"5px"} pr={"5px"} fontSize={"12px"}>{original_language}</Text>
      </Box>
    </Box>
    // </Link>
  )
}

export default MovieCard
