import { Box, Button, Skeleton, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { getAllData } from '../Redux/AppReducer/action'
import MovieCard from './MovieCard'

const Trending = ({whichType,path}) => {
    const dispatch = useDispatch();
    const location = useLocation()
    const {isLoading,isError,allMovie} = useSelector((state)=>{
        return {
            isLoading:state.Appreducer.isLoading,
            idError:state.Appreducer.idError,
            allMovie:state.Appreducer.allMovie,
        }
    })

    useEffect(()=>{
        dispatch(getAllData(path))
    },[])

  return (
    <Box>
        <Box w={"80%"} textAlign={"start"} m={'auto'} fontSize={"30px"} mb={"50px"} color={'white'}>{whichType}</Box>
        <Box w={"80%"} display={"grid"} gridTemplateColumns={"repeat(6,1fr)"} m={"auto"} gap={"10px"}>
            {
               allMovie.length>0 && allMovie.map((el)=>{
                    return (
                        <Box key={el.id}>
                            {
                                isLoading ? <Stack>
                                <Skeleton width="100px" height='200px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                              </Stack> : null
                            }
                            <Link to={`/${el.title}/details/${el.id}`} state= {{ prevPath: path }}>
                            <MovieCard key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} original_language={el.original_language}/></Link>
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
