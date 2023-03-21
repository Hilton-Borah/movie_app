import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllDataDetails } from '../Redux/AppReducer/action';

const MovieDeatails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {isLoading,isError,movieDetails} = useSelector((state)=>{
        return {
            isLoading:state.Appreducer.isLoading,
            idError:state.Appreducer.idError,
            movieDetails:state.Appreducer.movieDetails,
        }
    })

    const image = "https://image.tmdb.org/t/p/original";

    useEffect(()=>{
        dispatch(getAllDataDetails(id))
    },[])

    console.log(movieDetails)
  return (
    <Box w={"80%"} m={"auto"} border={"1px solid white"} mt={"100px"} color={"white"}>
      <Image src={image + movieDetails.backdrop_path}/>
      <Box w={"100%"} display={"flex"} justifyContent={"center"} alignItems={'center'} textAlign={"start"}>
        <Image w={"20%"} src={image + movieDetails.poster_path}/>
        <Box>
            <Text fontSize={"40px"}>{movieDetails.title}</Text>
            <Text bgColor={"green"} display={"inline-block"} p={"3px 5px"} borderRadius={"3px"}>{movieDetails.status}</Text>
            <Text>{movieDetails.overview}</Text>
            <Text>IMDB:- {movieDetails.vote_average.toFixed(1)}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieDeatails
