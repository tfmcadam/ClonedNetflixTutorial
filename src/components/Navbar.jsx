import {ArrowDropDown, Notifications, Search} from "@mui/icons-material";
import styled, {css} from "styled-components"

const NavContainer = styled.div`
    width: 100%;
    color: white;
    font-size: 14px;
    position: fixed;
    top: 0;
    z-index: 999;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
`
const MainContainer = styled.div`
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 25px;
        margin-right: 40px;
    }
span {
    margin-right: 20px;
    cursor: pointer;
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
    }
span {
    padding: 10px;
    curser: pointer;
}
`
const ProfileContainer = styled.div`
    .options {
        display: none;
        background-color: #0b0b0b;
        border-radius: 5px;
    }
    &:hover {
        .options {
            display: flex;
            flex-direction: column;
            position: absolute;
        }
    }
`

const sharedStyle = css`
    margin: 0px 15px;
    curser: pointer;    
`
const MySearch = styled(Search)`
    ${sharedStyle}
`
const MyNotifications = styled(Notifications)`
    ${sharedStyle}
`
const MyArrowDropDown = styled(ArrowDropDown)`
    ${sharedStyle}
`


const Navbar = () => {
    return <NavContainer>
        <MainContainer>
            <LeftContainer>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </LeftContainer>
            <RightContainer>
                <MySearch />
                <span>KID</span>
                <MyNotifications />
                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="user"/>
                <ProfileContainer>
                    <MyArrowDropDown />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </ProfileContainer>
            </RightContainer>
        </MainContainer>
    </NavContainer>
}

export default Navbar