import React, {useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const BodyContent = styled.body`
    width: 850px;
    display: flex;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
`

const CreateBox = styled.div`
    display: flex;
    height: 480px;
    width: 800px;
    justify-content: center;

    flex-wrap: wrap;
    border: 2px solid #D7CCC7;
    border-radius: 10px;
    margin: 8% 20% 0 20%;
    padding: 50px;
`

const StyledInput = styled.input`
    height: 60px;
    width: ${({width}) => width || "750px"};

    font-size: 30px;
    font-family: Inter;
    color: #A09894;
    border: none;
    padding-left: 10px;
    padding-bottom: 10px;

    border-bottom: 1px solid #D7CCC7;
    outline: none;
    overflow: auto;
    &::placeholder {
        color: #B3A8A3;
    }
`;

const StyledTextarea = styled.textarea`
    height: 350px;
    width: 750px;

    font-size: 15px;
    font-family: Inter;
    color: #A09894;

    border: none;
    outline: none;
    line-height: 170%;
    &::placeholder {
        color: #B3A8A3;
    }
`
const StyledButton = styled(Link)`
    text-align: center;
    font-family: Inter;
    text-decoration: none; 
    font-size: 18px;
    font-weight: bold;
    padding: 9px;
    background: #A09894;
    color: white;

    width: 120px;
    height: 25px;
    margin-left: auto;
    margin-top: 20px; 
    margin-bottom: 50px;

    &:hover {
        background-color: #8E8885;
      }
`

const CreatePage = ()=> {
    return <article>
        <BodyContent>
        <CreateBox> 
            <StyledInput type="text" name="tile" placeholder="제목" />
            <StyledTextarea name="contents" placeholder="본문을 입력하세요."></StyledTextarea>
        </CreateBox>
        <StyledButton>등록</StyledButton>
        </BodyContent>
    </article>
}

export default CreatePage;