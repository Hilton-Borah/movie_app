import React from 'react'
import {Routes,Route} from "react-router-dom"
import MovieDeatails from '../Componants/MovieDeatails'
import Allmovies from './Allmovies'
import Homepage from './Homepage'
import TV from './TV'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/tv"} element={<TV/>}/>
        <Route path='/:movie/details/:id' element={<MovieDeatails/>}/>
        <Route path={"/movie/popular"} element={<Allmovies/>}/>
        <Route path={"/movie/top_rated"} element={<Allmovies/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
