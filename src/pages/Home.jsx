import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";

const HomeContainer = styled.div`
    background-color: #0b0b0b;
`

const Home = () => {
    return (
        <HomeContainer>
            <Navbar />
            <Featured />
        </HomeContainer>
    )
}

export default Home