import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import MoviesList from "../components/MovieList";
const HomeContainer = styled.div`
    background-color: #0b0b0b;
    overflow: hidden;
`

const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Featured />
            <MoviesList />
            <MoviesList />
            <MoviesList />
            <MoviesList />
        </HomeContainer>
    )
}

export default Home