import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Movie = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
  });

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  return (
    <MovieContainer>
      <MovieIntro>
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.backdrop_path : ""
          }`}
        />
      </MovieIntro>
      <MovieDetail>
        <MovieDetailLeft>
          <MoviePosterBox>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
          </MoviePosterBox>
        </MovieDetailLeft>
        <MovieDetailRight>
          <MovieDetailRightTop>
            <MovieName>{movie ? movie.original_title : ""}</MovieName>
            <MovieTagline>{movie ? movie.tagline : ""}</MovieTagline>
            <MovieRating>
              {movie ? movie.vote_average : ""} <i class="fas fa-star" />
              <MovieVoteCount>
                {movie ? "(" + movie.vote_count + ") votes" : ""}
              </MovieVoteCount>
            </MovieRating>
            <MovieRuntime>{movie ? movie.runtime + " mins" : ""}</MovieRuntime>
            <MovieReleaseDate>
              {movie ? "Release date: " + movie.release_date : ""}
            </MovieReleaseDate>
            <MovieGeneres>
              {movie && movie.genres
                ? movie.genres.map((genre) => (
                    <>
                      <MovieGenere id={genre.id}>{genre.name}</MovieGenere>
                    </>
                  ))
                : ""}
            </MovieGeneres>
          </MovieDetailRightTop>
          <MovieDetailRightBottom>
            <SynopsisText>Synopsis</SynopsisText>
            <div>{movie ? movie.overview : ""}</div>
          </MovieDetailRightBottom>
        </MovieDetailRight>
      </MovieDetail>
      <MovieLinks>
        <MovieHeading>Useful Links</MovieHeading>
        {movie && movie.homepage && (
          <a
            href={movie.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <MovieHomeButton>
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </MovieHomeButton>
            </p>
          </a>
        )}
        {movie && movie.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movie.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <MovieImdbButton>
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </MovieImdbButton>
            </p>
          </a>
        )}
      </MovieLinks>
      <MovieHeading>Production Companies</MovieHeading>
      <MovieProduction>
        {movie &&
          movie.production_companies &&
          movie.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <ProductionCompanyImg>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </ProductionCompanyImg>
              )}
            </>
          ))}
      </MovieProduction>
    </MovieContainer>
  );
};

export default Movie;

const MovieContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MovieIntro = styled.div`
  width: 80%;

  > img:first-child {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 0 35%;
  }
`;
const MovieDetail = styled.div`
  align-items: center;
  width: 75%;
  display: flex;
  position: relative;
  bottom: 225px;
`;
const MovieDetailLeft = styled.div`
  margin-right: 30px;
`;
const MoviePosterBox = styled.div`
  > img:first-child {
    width: 300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
  }
`;
const MovieDetailRight = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
`;
const MovieDetailRightTop = styled.div``;
const MovieName = styled.div`
  font-weight: 600;
  font-size: 3rem;
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieTagline = styled.div`
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieRating = styled.div`
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieVoteCount = styled.span`
  margin-left: 1rem;
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieRuntime = styled.div`
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieReleaseDate = styled.div`
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;

const MovieGeneres = styled.div`
  margin: 0.9rem 0;
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
  display: flex;
`;
const MovieGenere = styled.div`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
  margin-right: 1rem;
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;
const MovieDetailRightBottom = styled.div`
  margin: 2rem 0;
  flex: 0.8;
`;
const SynopsisText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;

  :last-of-type {
    margin-left: auto;
  }
`;
const MovieLinks = styled.div`
  position: relative;
  bottom: 120px;
  display: flex;
  justify-content: space-between;
  width: 75%;
`;
const MovieImdbButton = styled.span`
  background-color: #f3ce13;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  width: 150px;
  color: black;
  font-weight: bold;

  > i {
    margin-left: 1.4rem;
  }
`;
const MovieHomeButton = styled.span`
  background-color: rgb(255, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  width: 150px;
  color: black;
  font-weight: bold;

  > i {
    margin-left: 1.4rem;
  }
`;
const MovieHeading = styled.div`
  font-size: 2.2rem;
`;
const MovieProduction = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4rem;
`;
const ProductionCompanyImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 200px;
    margin: 2rem;
  }
`;
