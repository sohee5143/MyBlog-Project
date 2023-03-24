import React from 'react';
import styled from 'styled-components';

const BodyContent = styled.body`
    display: flex;
    justify-content: center;
`

const LoginBox = styled.div`
    display: flex;
    width: 700px;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin-top: 4%;

    flex-wrap: wrap;
`

const LoginText = styled.div`
    color: #A09894;
    font-size: 45px;
    font-weight: bold;
    width: 500px;
    text-align: center;
    padding: 20px;
    margin-top: 10px;
`

const LoginButton = styled.button `
    height: 50px;
    width: 370px;

    color: #fff;
    background-color: #A09894;
        &:hover {
          background-color: #8E8885;
        }

    font-size: 18px;
    border: none;
    margin-bottom: 40px;
`;

const StyledInput = styled.input`
    height: 30px;
    width: 350px;
    background-color: #EDE9E7;
    color: #89817E;

    font-size: 15px;
    border: none;
    outline: none;
    overflow: auto;
    padding: 12px;
`;


function LoginPage() {
        return (
            <BodyContent>
                <LoginBox>
                    <LoginText>LOG IN</LoginText>
                    <StyledInput type="text" placeholder="아이디" top= "45%"/>
                    <StyledInput type="text" placeholder="비밀번호" />
                    <LoginButton type="submit"> 로그인 </LoginButton>  
                </LoginBox>
            </BodyContent>
    )
}

export default LoginPage;