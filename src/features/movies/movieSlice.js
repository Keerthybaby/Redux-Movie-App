import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import {APIKey}  from '../../common/apis/MovieApiKey';



export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies', async()=>{
  const movieText="Harry";
    
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
      
     
     return response.data;
});
const initialState={
  movies: {},
};

const movieSlice=createSlice({
  name:"movies",
  initialState,
  reducers:{
    addMovies:(state, {payload}) =>{
      state.movies=payload;
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
      });
  },
});


export const {addMovies} =movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies;
export default movieSlice.reducer;

