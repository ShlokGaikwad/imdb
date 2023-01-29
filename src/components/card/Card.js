import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? (
        <CardContainer>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </CardContainer>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <CardContainer>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <CardOverlay>
              <CardTitle>{movie ? movie.original_title : ""}</CardTitle>
              <CardRuntime>
                {movie ? movie.release_date : ""}
                <CardRating>
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </CardRating>
              </CardRuntime>
              <CardDescription>
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </CardDescription>
            </CardOverlay>
          </CardContainer>
        </Link>
      )}
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  display: inline-block;
  transition: transform 0.2s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.2rem;
  cursor: pointer;
  min-width: 220px;
  height: 300px;
  z-index: 0;
  border: 1px solid rgb(99, 99, 99);

  :hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  > img {
    height: 300px;
    width: 100%;
  }
`;
const CardOverlay = styled.div`
  position: absolute;
  padding: 0 1rem 1 rem 1rem;
  bottom: 0px;
  height: 290px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  opacity: 0;
  transition: opacity 0.2s;

  :hover {
    opacity: 1;
  }
`;
const CardTitle = styled.div`
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;
const CardRuntime = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;
const CardRating = styled.span`
  float: right;
`;
const CardDescription = styled.div`
  font-style: italic;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;
