import { Box, Button, Divider, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom'
import { getAllDataDetails } from '../Redux/AppReducer/action';
import Footer from './Footer';
import Trending from './Trending';

const MovieDeatails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const [dum,setDum] = useState([])
  const { isLoading, isError, movieDetails } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      movieDetails: state.Appreducer.movieDetails,
    }
  })

  const image = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    dispatch(getAllDataDetails(id))
  }, [id])

  // useEffect(() => {
  //   axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e4647b933575d419ceb5fef345794dac`)
  //     .then((res) => {
  //       setDum(res.data.results)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  console.log(movieDetails)
  return (
    <Box w={"100%"} m={"auto"} mt={"100px"} color={"white"}>
      <Box display={"flex"} w={"90%"} m={'auto'} gap={'10px'} mb={"30px"} fontSize={"18px"}>
        <Link to={"/"}><Text>Home</Text></Link>
        <Link to={location.state.prevPath}><Text>{location.state.prevPath}</Text></Link>
        <Text>/{movieDetails.title}</Text>
      </Box>
      <Box w={"90%"} m={'auto'}>
        <Image src={image + movieDetails.backdrop_path} filter={"brightness(60%)"} />
      </Box>
      <Box w={"90%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"} textAlign={"start"} gap={"30px"} m={"auto"} border={'0.5px solid rgb(50, 50, 50)'} mt={"20px"} borderRadius={"10px"} p={"30px"}>
        <Box w={"20%"}>
          <Image src={image + movieDetails.poster_path} borderRadius={"10px"} />
          <Divider w={"99%"} m={"auto"} mt={"20px"} mb={"20px"} border={'2px solid lightgray'} />
          <Box display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
            <Link w={"48%"} target={"_blank"} to={`https://www.youtube.com/results?search_query=${movieDetails.title}+movie+trailor`}><Button border={"1px solid lightgreen"} bgColor={"black"} fontSize={"14px"}  color={"lightgreen"} display={"inline-block"} p={"1px 15px"} _hover={{ borderBottom: "3px solid lightgreen" }} borderRadius={"3px"} cursor={"pointer"}>Trailor</Button></Link>
            <Link w={"48%"} target={"_blank"} to={movieDetails.title && location.pathname}><Button border={"1px solid lightblue"} _hover={{ borderBottom: "3px solid lightblue" }} color={"lightblue"} display={"inline-block"} p={"1px 15px"} borderRadius={"3px"} bgColor={"black"} fontSize={"14px"} cursor={"pointer"}>Visit homepage</Button></Link>
          </Box>
        </Box>
        <Box w={"80%"}>
          <Box w={"95%"} display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
            <Box>
              <Text fontSize={"40px"} >{movieDetails.title}</Text>
              <Text fontSize={"20px"} >{movieDetails.tagline}</Text>
            </Box>
            <Button border={"1px solid white"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid white" }} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} borderRadius={"5px"} cursor={"pointer"} fontSize={'13px'}>Add to wishlist</Button>
          </Box>

          <Text bgColor={"green"} display={"inline-block"} p={"3px 10px"} borderRadius={"3px"} mb={"20px"} mt={"10px"} fontSize={"14px"}>{movieDetails.status}</Text>
          <Text>{movieDetails.overview}</Text>
          <Text>Duration:- {movieDetails.runtime} minutes</Text>
          <Text>IMDB:- {movieDetails.vote_average && movieDetails.vote_average.toFixed(1)}</Text>
          <Text>Released:- {movieDetails.release_date && movieDetails.release_date}</Text>
          <Text>Budget:- ${movieDetails.budget && movieDetails.budget} USD</Text>
          <Text>Box-office:- ${movieDetails.revenue && movieDetails.revenue} USD</Text>
          <Box>Language:-
            {
              movieDetails.spoken_languages && movieDetails.spoken_languages.map((el) => {
                return (
                  <Box key={el.id} display={"inline-block"} p={"1px 5px"} borderRadius={"5px"}>{el.name},</Box>
                )
              })
            }
          </Box>
          <Box>Production countries:-
            {
              movieDetails.production_countries && movieDetails.production_countries.map((el) => {
                return (
                  <Box key={el.id} display={"inline-block"} p={"1px 5px"} borderRadius={"5px"}>{el.name},</Box>
                )
              })
            }
            <Box gap={"10px"}>Production companies:-
              {
                movieDetails.production_companies && movieDetails.production_companies.map((el) => {
                  return (
                    <Box key={el.id} display={"inline-block"} p={"1px 5px"} borderRadius={"5px"}>{el.name},</Box>
                  )
                })
              }
            </Box>
            <Box gap={"10px"} mt={"10px"} fontSize={"14px"}>
              {
                movieDetails.genres && movieDetails.genres.map((el) => {
                  return (
                    <Box key={el.id} bgColor={"white"} display={"inline-block"} color={"black"} mr={"10px"} p={"1px 7px"} borderRadius={"5px"}>{el.name}</Box>
                  )
                })
              }
            </Box>
          </Box>
          <Text>{ }</Text>
        </Box>
      </Box>
      <Divider w={"99%"} m={"auto"} mt={"100px"} mb={"100px"} border={'5px solid lightgray'}/>
      <Trending whichType={"Related movies"} path={"/movie/popular"}/>
      <Divider w={"99%"} m={"auto"} mt={"100px"} mb={"100px"} border={'5px solid lightgray'}/>
      <Footer />
      <Divider w={"99%"} m={"auto"} mt={"100px"} border={'5px solid lightgray'} />
    </Box>
  )
}

export default MovieDeatails
