import { Box, Button, Divider, Image, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getAllData, getAllDataDetails, getAllSearchData } from '../Redux/AppReducer/action';

const Searchbar = () => {
    const image = "https://image.tmdb.org/t/p/original";
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate
    const {isLoading,isError,allMovieSearch} = useSelector((state)=>{
        return {
            isLoading:state.Appreducer.isLoading,
            idError:state.Appreducer.idError,
            allMovieSearch:state.Appreducer.allMovieSearch,
        }
    })

    const [searchparams, setSearchparams] = useSearchParams()
    const [text, setText] = useState(searchparams.get("q") || "");
    const [movie, setMoivie] = useState([]);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    
   
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        console.log("Haii")
      return <Navigate to={`/movie/search/${text}`} state={{prevPath:location.pathname,query:text}}/>
    }
  };

    useEffect(() => {
        dispatch(getAllSearchData(text))
        if (text !== "") {
            setSearchparams({ q: text })
        } else {
            setSearchparams("")
        }
    }, [text])

    // console.log(allMovieSearch)
    return (
        <Box>
            <Box display={"flex"} justifyContent={'space-between'} m={'auto'} mt={"30px"} w={"50%"}>
                <Box w={"100%"}>
                    <Input onChange={handleChange} onKeyDown={handleKeyDown} type={"search"} value={text} placeholder={"What you want to see ......."} variant={"unstyled"} border={'1px solid'} p={"7px"} _hover={{ borderBottom: "3px solid" }} />
                    {
                        text === "" ? null :
                            <Box bgColor={'black'} overflow={"scroll"} height={allMovieSearch.length === 0 ? "50px" : "300px"} w={"100%"} border={'1px solid'} m={'auto'} borderRadius={"5px"}  css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none' 
                                }
                            }}>
                                {
                                    allMovieSearch.length ===0 ? <Box display={"flex"} w={'85%'} m={'auto'} justifyContent={"space-between"} alignItems={"center"} p={'10px'}>
                                        <AiOutlineSearch/>
                                        <Text fontSize={"16px"}>No result found, search again</Text>
                                    </Box> : null
                                }
                                {
                                     allMovieSearch.map((el) => {
                                        return (
                                            <Box cursor={"pointer"}>
                                                <Link to={`/${el.title}/details/${el.id}`} state={{ prevPath: location.pathname }}>
                                                    <Box>
                                                        <Box key={el.id} display={"flex"} justifyContent={'space-between'} alignItems={'center'} p={"30px"} >
                                                            <Box w={"60%"} textAlign={"start"} >
                                                                <Text fontSize={"18px"}>{el.title}</Text>
                                                                <Text fontSize={"14px"} mt={'5px'}>{el.release_date}</Text>
                                                            </Box>
                                                            <Box w={"40%"}  display={"flex"} justifyContent={"end"} alignItems={'center'}>
                                                                <Image w={"70%"} src={image + el.poster_path} borderRadius={"5px"} h={"150px"}/>
                                                            </Box>
                                                        </Box>
                                                        <Divider w={"95%"} m={"auto"}/>
                                                    </Box>
                                                    </Link>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                    }
                </Box>
                <Link to={`/movie/search/${text}`} state={{prevPath:location.pathname,query:text}}><Button border={"1px solid"} p={"7px"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid" }}>Search your movie</Button></Link>
            </Box>
        </Box>
    )
}
{/* <Link to={`/${el.title}/details/${el.id}`} state= {{ prevPath: path }}></Link> */}
export default Searchbar
