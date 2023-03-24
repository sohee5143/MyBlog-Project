import React, { useState } from 'react';
import styled from 'styled-components';
import MyProfile from '../common/MyProfile';

const BodyContent = styled.body`
    display: flex;
    flex-wrap: wrap;
    
`

const postsBox = styled.div`
    border-bottom: 2px solid #C0B6B1;
`

function LandingPage() {
    let [postsTitle, b] = useState(['포스트 제목1', '두번째 글 입니다']);

    return (
        <BodyContent>
            <MyProfile />
            <postsBox>
                <h3> { postsTitle[0] } </h3>
                <p>22-02-17</p>
                <hr/>
            </postsBox>
        </BodyContent>
    )
}

export default LandingPage;