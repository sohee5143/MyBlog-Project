import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    font-family: Inter;    
    text-decoration: none; 
    display: flex;
    align-items: center;

    font-weight: ${({fontWeight}) => fontWeight || "600"};
    color: ${({color}) => color || "#5B4539"};
    font-size: ${({fontSize}) => fontSize || "23px"};
    padding: ${({padding}) => padding || "0px 65px"};
`
const StyledHeader = styled.ul`
    background-color: #EDE9E7;
    margin: 0px;
    display: flex;

    width: 100%;
    height: 170px;
`;

const Header = ()=> {
        return (
            <StyledHeader>
                <StyledLink to="/" fontWeight="800"  fontSize="53px">MYBLOG</StyledLink>
                <StyledLink to="/" color="#A09894" padding="0px 20px" >Home</StyledLink>
                <StyledLink to="/login" color="#A09894" padding="0px 40px">Login</StyledLink>
            </StyledHeader>
    );
}

export default Header;