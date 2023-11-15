import styled from "styled-components";

const ItemContainer = styled.div`
width: 225px;
height: 120px;
background-color: #0b0b0b;
margin-right: 5px;
overflow: hidden;
cursor: pointer;
color: white;
`

const MainImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
//! Add isHovered to MovieItem

const MovieItem = ({ index }) => {
    return (
        <ItemContainer>
            <MainImage
                src="https://cdn.akamai.steamstatic.com/steam/apps/1265780/header.jpg"
                alt="trailer"
                />
        </ItemContainer>
    )
}

export default MovieItem