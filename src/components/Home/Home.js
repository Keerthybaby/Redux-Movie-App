import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"

import {useDispatch} from "react-redux";
import {addMovies} from "../../features/movies/movieSlice"


const Home = () => {

  const movieText="Harry";
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetchMovies=async()=>{};
      
  
    fetchMovies();
  },[]);
  return (
    <div>
     <div className="banner-img"></div>
    <MovieListing />
    </div>
  );
};

export default Home;