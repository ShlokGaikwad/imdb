import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/react";
import styled from "styled-components";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <MovieListContainer>
      <h2>{(type ? type : "POPULAR").toUpperCase()}</h2>
      <ListCards>
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </ListCards>
    </MovieListContainer>
  );
};

export default MovieList;

const MovieListContainer = styled.div`
  padding: 0 3rem 3rem 3rem;
  > h2 {
    font-size: 1.75rem;
    margin: 2.5rem;
  }
`;
const ListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justofy-content: center;
`;
