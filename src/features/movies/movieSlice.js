import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import {APIKey}  from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies', async(term)=>{
  
  const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`);
  return response.data;
});

export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows', async(term)=>{
  
  const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`);
  return response.data;
});

export const fetchAsyncMovieOrShowDetail=createAsyncThunk('movies/fetchAsyncSelectMoviesOrDetail', async(id)=>{
  
  const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
});

const initialState={
  movies: {},
  shows:{},
  selectedMovieOrShow:{},
};

const movieSlice=createSlice({
  name:"movies",
  initialState,
  reducers:{
    
    removeSelectedMovieOrShow:(state)=>{
      state.selectMovieOrShow={};
    },
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchAsyncMovies.pending,(state)=>{
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled,(state,{payload})=>{
        console.log("Fetched Successfully");
        state.movies=payload;
      })
      .addCase(fetchAsyncMovies.rejected,(state)=>{
        console.log("Rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
        console.log("Fetched Successfully");
        state.shows=payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,{payload})=>{
        console.log("Fetched Successfully");
        state.selectMovieOrShow=payload;
      });
  },
});


export const {removeSelectedMovieOrShow} =movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies;
export const getAllShows=(state)=> state.movies.shows;
export const getSelectedMovieOrShow=(state)=> state.movies.selectMovieOrShow;
export default movieSlice.reducer;


