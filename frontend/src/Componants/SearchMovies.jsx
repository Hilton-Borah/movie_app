import { Box, Button, Divider, Skeleton, Spinner, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Footer from '../Componants/Footer';
import MovieCard from '../Componants/MovieCard';
import SkeletonMoviecard from '../Componants/SkeletonMoviecard';
import { getAllSearchData } from '../Redux/AppReducer/action';
import Searchbar from './Searchbar';

const SearchMovies = () => {
    const location = useLocation();
    const {text} = useParams()
    const [searchparams, setSearchparams] = useSearchParams();
    const [dis, setDis] = useState(false)
    const [page, setPage] = useState(Number(searchparams.getAll("page"))[0] || 1);
    const dispatch = useDispatch();
    const { isLoading, isError, allMovieSearch } = useSelector((state) => {
        return {
            isLoading: state.Appreducer.isLoading,
            idError: state.Appreducer.idError,
            allMovieSearch: state.Appreducer.allMovieSearch,
        }
    })

    useEffect(() => {
        dispatch(getAllSearchData(text))
    }, [])


    const handlePageDCS = () => {
        if (page === 0) {
            setPage(1)
            setDis(true)
            setSearchparams({ page: page })
        } else {
            setPage(page - 1)
            setSearchparams({ page: page - 1 })
        }
    }

    const handlePageINC = () => {
        setPage(page + 1)
        setSearchparams({ page: page + 1 })
    }

    return (
        <Box>
            <Box display={"flex"} w={'80%'} m={'auto'} justifyContent={"end"} alignItems={"center"} mt={"100px"} mb={"30px"} gap={"10px"}>
            {/* <Searchbar/> */}
                {
                    page === 1 ? null : <Button border={"1px solid white"} p={"7px"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid white" }} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} borderRadius={"5px"} cursor={"pointer"} onClick={handlePageDCS} disabled={dis}> <AiFillCaretLeft />Prev</Button>
                }
                <Button border={"1px solid white"} p={"7px"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid white" }} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} borderRadius={"5px"} cursor={"pointer"} onClick={handlePageINC}>Next <AiFillCaretRight /></Button>
            </Box>
            <Box w={"80%"} display={"grid"} gridTemplateColumns={"repeat(5,1fr)"} m={"auto"} gap={"10px"}>
                {
                    allMovieSearch && allMovieSearch.map((el) => {
                        return (
                            <Box key={el.id}>
                                {
                                    isLoading ? <Stack>
                                        <Skeleton w={"100%"} h={"300px"} />
                                        <Skeleton p={"10px"} w={"100%"} />
                                        <Box w={"100%"} pl={"10px"} pr={"10px"} display={"flex"} justifyContent={"space-between"} gap={"5px"} alignItems={"center"}>
                                            <Skeleton w={"50%"} p={"10px"} />
                                            <Skeleton w={"50%"} p={"10px"} />
                                        </Box>
                                    </Stack> :
                                        <Link to={`/${el.title}/details/${el.id}`} state={{ prevPath: location.pathname }}>
                                            <MovieCard key={el.id} id={el.id} title={el.title} poster_path={el.poster_path} release_date={el.release_date} original_language={el.original_language} /></Link>
                                }
                            </Box>
                        )
                    })
                }
            </Box>
            <Box display={"flex"} w={'80%'} m={'auto'} justifyContent={"end"} alignItems={"center"} mt={"50px"} gap={"10px"}>
                {
                    page === 1 ? null : <Button border={"1px solid white"} p={"7px"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid white" }} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} borderRadius={"5px"} cursor={"pointer"} onClick={handlePageDCS} disabled={dis}> <AiFillCaretLeft />Prev</Button>
                }
                <Button border={"1px solid white"} p={"7px"} color={"white"} pl={"10px"} pr={"10px"} variant={"unstyled"} _hover={{ borderBottom: "3px solid white" }} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} borderRadius={"5px"} cursor={"pointer"} onClick={handlePageINC}>Next <AiFillCaretRight /></Button>
            </Box>
            <Divider w={"99%"} m={"auto"} mt={"100px"} mb={"100px"} border={'5px solid lightgray'} />
            <Footer />
            <Divider w={"99%"} m={"auto"} mt={"100px"} border={'5px solid lightgray'} />

        </Box>
    )
}

export default SearchMovies
