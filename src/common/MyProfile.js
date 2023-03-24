import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPen, faGear, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProfileBox = styled.div`
    border: 2px solid #D7CCC7;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;

    height: 600px;
    width: 330px;
    margin: 60px 90px;
    justify-content: center;
`;

const Profile = styled.div`
    display: flex;
    height: 330px;
    width: 350px;
    margin: 45px 30px 0px 30px;
    border-bottom: 2px solid #D7CCC7;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ProfileImage = styled.div`
    width: 200px;
    height: 200px;

    background-color: #E0DDDC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
`;

const StyledButton = styled(Link)`
    text-align: center;
    font-family: Verdana;
    text-decoration: none; 
    color: #89817E;
    font-size: 18px;
    font-weight: bold;

    border: 2px solid #CEC6C2;
    padding: 9px;
    background: white;

    width: 105px;
    height: 25px;
    margin: 8px;
    margin-top: 20px; 

    &:hover {
        background: #CEC6C2;
        color: white;
        size: xl;
      }
`
const StyledProfileIcon = styled(FontAwesomeIcon)`
    color: white;
    padding: 20px;
    display: flex;
`
const StyledText = styled.p`
    color: #89817E;
    display: flex;
    width: 230px;
    height: 8px;
    font-size: 18px;
    font-family: Inter;    
    font-weight: ${({fontWeight}) => fontWeight || "normal"};
    margin-top: ${({marginTop}) => marginTop || "0px"};
    margin-bottom: ${({marginBottom}) => marginBottom || "0px"};
`
const SearchBox = styled.div`
    display: flex;
    height: 45px;
    width: 255px;
    background-color: #EDE9E7;
    align-items: center;
    padding-left: 15px;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    width: 240px;
    height: 100%;
    border: none;
    outline: none;
    overflow: auto;
    background-color: transparent;
    display: flex;

    margin-left: 10px;
    font-size: 15px;
    color: #89817E;
`;

const NowId = "Sohee";
const NowEmail = "sohee5143@naver.com";

const MyProfile = ()=> {
    return (
        <ProfileBox>
            <Profile>
                <ProfileImage>
                    <StyledProfileIcon icon={faUser} size="9x" className="user" />
                </ProfileImage>
                <StyledText fontWeight="bold" marginTop="20px">{NowId}</StyledText>
                <StyledText marginBottom="20px">( {NowEmail} )</StyledText>
            </Profile>
            <StyledButton to="/Create">
                <FontAwesomeIcon icon={faPen} className="pen" />
                {" "}
                글쓰기
            </StyledButton>
            <StyledButton to="/Edit">
                <FontAwesomeIcon icon={faGear} className="gear" />
                {" "}
                글관리
            </StyledButton>
            <SearchBox>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingglass" color="#C0B6B1" size="2x" width="25px" padding="20px"/>
                <SearchInput />
            </SearchBox>  
        </ProfileBox>
);
}

export default MyProfile;