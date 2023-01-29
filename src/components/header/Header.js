import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </HeaderLeft>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  margin: 0 2.5rem;
  padding: 0.5rem 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > a > span {
    margin: 0 30px;
    font-size: 1.3rem;
    cursor: pointer;
    color: white;
  }

  > a > span:hover {
    color: red;
  }
`;

// const HeaderRight = styled.div`
//   display: flex;
//   align-items: center;
// `;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;
