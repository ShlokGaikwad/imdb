import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/Header";
import MovieList from "./components/movielist/MovieList";
import Home from "./pages/home/Home";
import Movie from "./pages/home/movieDetail/Movie";

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route
            path="movies/:type"
            element={<MovieList/>}
          ></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: black;
  color: white;
  // font-size: 50px;
  font-family: sans-serif;
`;
