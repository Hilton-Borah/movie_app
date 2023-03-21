import { Box, Button, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import axios, { all } from 'axios';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx"

const intialState = {
    casts: [],
    country: "",
    description: "",
    duration: "",
    genre: [],
    movieImage: "",
    movieName: "",
    movieRating: 0,
    movieUrl: "",
    movieYear: ""
}


const Addmovie = () => {
    let [cast, setCast] = useState([""]);
    let [genres, setGenre] = useState([]);
    let [alldata, setAlldata] = useState(intialState)

    // console.log(cast)
    let { country, description, duration, movieImage, movieName, movieRating, movieUrl, movieYear } = alldata

    const handleAddCast = () => {
        setCast([...cast, ""]);
        alldata.casts = cast;
    }

    const handleCastDelete = (index) => {
        let castList = [...cast];
        castList.splice(index, 1);
        setCast(castList)
        alldata.casts = castList;
    }

    const handleChangeCast = (e, index) => {
        const castList = [...cast];
        castList[index] = e.target.value;
        setCast(castList)
    }

    const handleGenreChanged = (e) => {
        setGenre([...genres, e.target.value])
        alldata.genre = genres;
    }


    const handleChangeAlldata = (e) => {
        const { name, value } = e.target;
        alldata.casts = cast;
        alldata.genre = genres;
        setAlldata({ ...alldata, [name]: value });
    }

    const handleGenreDelete=(index)=>{
        const genreList = [...genres];
        genreList.splice(index,1);
        setGenre(genreList)
        alldata.genre = genreList;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alldata.casts = cast;
        alldata.genre = genres;
        // console.log(alldata)
        axios.post("https://movies-api-v1.onrender.com:443/api/v1/movies/add",alldata)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }


    return (
        <Box>
            <form action="" style={{ color: "white",width:"40%",margin:"auto" }} onSubmit={handleSubmit}>
                <FormLabel>Casting</FormLabel>
                <Box>
                    {
                        cast.length && cast.map((el, index) => {
                            return (
                                <Box key={index} display={"block"}>
                                    <Box>
                                        <Input placeholder='Enter cast name' value={el} onChange={(e) => handleChangeCast(e, index)} />
                                    </Box>
                                    {
                                        cast.length > 1 && <Button onClick={() => handleCastDelete(index)}>Remove</Button>
                                    }
                                </Box>
                            )
                        })
                    }
                    {
                        cast.length < 5 && <Button onClick={handleAddCast}>Add</Button>
                    }
                </Box>

                <FormLabel>Country</FormLabel>
                <Input placeholder='' name='country' value={country} onChange={handleChangeAlldata} />
                <FormLabel>Description</FormLabel>
                <Input placeholder='' name='description' value={description} onChange={handleChangeAlldata} />
                <FormLabel>Duration</FormLabel>
                <Input placeholder='' name='duration' value={duration} onChange={handleChangeAlldata} />
                <FormLabel>Genres</FormLabel>
                <Select onChange={handleGenreChanged}>
                    <option style={{ backgroundColor: "black" }} value="">Select genre</option>
                    <option style={{ backgroundColor: "black" }} value="ACTION">Action</option>
                    <option style={{ backgroundColor: "black" }} value="ADVENTURE">Adventure</option>
                    <option style={{ backgroundColor: "black" }} value="ANIME">Anime</option>
                    <option style={{ backgroundColor: "black" }} value="BIOGRAPHY">Biography</option>
                    <option style={{ backgroundColor: "black" }} value="CARTOON">Cartoon</option>
                    <option style={{ backgroundColor: "black" }} value="COMEDY">Comedy</option>
                    <option style={{ backgroundColor: "black" }} value="CRIME">Crime</option>
                    <option style={{ backgroundColor: "black" }} value="DOCUMENTARY">Documentary</option>
                    <option style={{ backgroundColor: "black" }} value="DRAMA">Drama</option>
                    <option style={{ backgroundColor: "black" }} value="FANTASY">Fantasy</option>
                    <option style={{ backgroundColor: "black" }} value="HORROR">Horror</option>
                    <option style={{ backgroundColor: "black" }} value="MYSTERY">Mystery</option>
                    <option style={{ backgroundColor: "black" }} value="ROMANTIC">Romantic</option>
                    <option style={{ backgroundColor: "black" }} value="SCI-FI">Sci-fi</option>
                    <option style={{ backgroundColor: "black" }} value="SUSPENSE">Suspense</option>
                    <option style={{ backgroundColor: "black" }} value="THRILLER">Thriller</option>
                </Select>
                <Box display={"grid"} gridTemplateColumns={"repeat(8,1fr)"} gap={"10px"}>
                    {
                        genres.length > 0 && genres.map((el, index) => {
                            return (
                                <Box key={index} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"5px"} borderRadius={"50px"} border={"1px solid"} mt={"10px"} p={"5px 10px"} bgColor={"white"} color={"black"}>
                                    <Text fontSize={"10px"}>{el}</Text>
                                    <Text cursor={"pointer"} fontSize={"12px"} onClick={()=>handleGenreDelete(index)}><RxCross2 /></Text>
                                </Box>
                            )
                        })
                    }
                </Box>
                <FormLabel>Movie image</FormLabel>
                <Input placeholder='' name='movieImage' value={movieImage} onChange={handleChangeAlldata} />
                <FormLabel>Movie name</FormLabel>
                <Input placeholder='' name='movieName' value={movieName} onChange={handleChangeAlldata} />
                <FormLabel>Movie Rating</FormLabel>
                <Input placeholder='' name='movieRating' value={movieRating} onChange={handleChangeAlldata} />
                <FormLabel>Movie Url</FormLabel>
                <Input placeholder='' name='movieUrl' value={movieUrl} onChange={handleChangeAlldata} />
                <FormLabel>Release Year</FormLabel>
                <Input placeholder='' name='movieYear' value={movieYear} onChange={handleChangeAlldata} />
                <Button type='submit'>Add movie</Button>
            </form>
        </Box>
    )
}

export default Addmovie
