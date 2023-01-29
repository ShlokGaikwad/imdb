import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MovieList from "../../components/movielist/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <PosterContainer>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <PosterImage>
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </PosterImage>
            <PosterOverlay>
              <PosterTitle>{movie ? movie.original_title : ""}</PosterTitle>
              <PosterRuntime>
                {movie ? movie.release_date : ""}
                <PosterRating>
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </PosterRating>
              </PosterRuntime>
              <PosterDescription>
                {movie ? movie.overview : ""}
              </PosterDescription>
            </PosterOverlay>
          </Link>
        ))}
      </Carousel>
      <MovieList/>
    </PosterContainer>
  );
};

export default Home;
const PosterContainer = styled.div``;
const PosterImage = styled.div`
  height: 600px;
  PosterImage> img {
    margin: auto;
    display: block;
    width: 100%;
  }
`;
const PosterOverlay = styled.div`
  position: absolute;
  padding: 5rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  opacity: 1;
  transition: opacity 0.3s;

  :hover {
    opacity: 1;
  }
`;
const PosterTitle = styled.div`
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 0.4rem;
  text-align: left;
`;
const PosterRuntime = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const PosterRating = styled.span`
  margin-left: 3rem;
`;
const PosterDescription = styled.div`
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: flex;
  text-align: left;
  width: 50%;
`;
