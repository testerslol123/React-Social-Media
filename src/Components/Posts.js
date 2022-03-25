import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Posts() {
  return (
    <Container>
        <Header>
            <List>
                <Avatar />
                <span>Timo</span>
            </List>
            <RightContainer>
                <MoreHorizIcon style={{cursor: "pointer", fontSize: 15}} />
            </RightContainer>
        </Header>
        <Post>
            <img src="" alt="image" />
        </Post>
    </Container>
  )
}

export default Posts;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 714px;
    background-color: white;
    margin: 0 auto;
`;

const Header = styled.div`

`;

const List = styled.div`
    display: flex;
    align-items: center;
    span {
        font-family: "Poppins", sans-serif;
        margin-left: 10px;
    }
`;

const RightContainer = styled.div`

`;

const Post = styled.div`
    width: 100%;
    img {
        width: 100%;
        object-fit: contain;
    }
`;

