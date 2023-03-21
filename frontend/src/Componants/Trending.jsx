import { Box, Button, Skeleton, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllData } from '../Redux/AppReducer/action'
import MovieCard from './MovieCard'

const Trending = ({whichType,path}) => {
    const dispatch = useDispatch();
    const {isLoading,isError,allMovie} = useSelector((state)=>{
        return {
            isLoading:state.Appreducer.isLoading,
            idError:state.Appreducer.idError,
            allMovie:state.Appreducer.allMovie,
        }
    })
    // const dummyArr = [
    //     {
    //         image:"https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/official-release-for-shazam-2-announced-6663.jpg",
    //         name:"Shazami",
    //         year:"2023",
    //         country:"USA"
    //     },
    //     {
    //         image:"https://assets.gadgets360cdn.com/pricee/assets/product/202212/babylon_poster_1672374652.jpeg",
    //         name:"Babylon",
    //         year:"2021",
    //         country:"Russia"
    //     },
    //     {
    //         image:"https://assets.gadgets360cdn.com/pricee/assets/product/202212/Plane_1672382089.jpg",
    //         name:"Plane",
    //         year:"2022",
    //         country:"UK"
    //     },
    //     {
    //         image:"https://nettv4u.com/fileman/Uploads/10-Upcoming-Hollywood-movies/image017.jpg",
    //         name:"POPEYE",
    //         year:"2023",
    //         country:"India"
    //     },
    //     {
    //         image:"https://nettv4u.com/fileman/Uploads/10-Upcoming-Hollywood-movies/image017.jpg",
    //         name:"POPEYE",
    //         year:"2023",
    //         country:"India"
    //     },
    //     {
    //         image:"https://nettv4u.com/fileman/Uploads/10-Upcoming-Hollywood-movies/image017.jpg",
    //         name:"POPEYE",
    //         year:"2023",
    //         country:"India"
    //     },
        
    // ]


    useEffect(()=>{
        dispatch(getAllData(path))
    },[])

    // console.log(allMovie)

  return (
    <Box>
        <Box w={"80%"} textAlign={"start"} m={'auto'} fontSize={"30px"} mb={"50px"} color={'white'}>{whichType}</Box>
        <Box w={"80%"} display={"grid"} gridTemplateColumns={"repeat(6,1fr)"} m={"auto"} gap={"10px"}>
            {
               allMovie && allMovie.splice(7,6).map((el)=>{
                    return (
                        <Box>
                            {
                                isLoading ? <Stack>
                                <Skeleton width="100px" height='200px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                              </Stack> : null
                            }
                            <MovieCard key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} original_language={el.original_language}/>
                        </Box>
                    )
                })
            }
        </Box>
        <Box display={"flex"} w={'80%'} m={'auto'} justifyContent={"end"} alignItems={"center"} mt={"50px"}>
        <Link to={path}><Button border={"1px solid white"} p={"7px"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{borderBottom:"3px solid white"}}>Explore more</Button></Link>
        </Box>
    </Box>
  )
}

export default Trending
