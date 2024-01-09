import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const {imdbID} = useParams();
  return <div>MovieDetail</div>;
};

export default MovieDetail;
