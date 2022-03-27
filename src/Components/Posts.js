import React, {useState} from 'react';
import styled from 'styled-components';

import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from "@mui/icons-material/Delete";



function Posts() {
    const [cards, setCards] = useState(false);
    const Delete = () => {
        setCards(false);
    }





  return (
    <Container>
        <Header>
            <List>
                <Avatar />
                <span>Timo</span>
            </List>
            <RightContainer>
                <MoreHorizIcon 
                    style={{cursor: "pointer"}} 
                    onClick={() => setCards(true)} 
                />
                <CardListContainer>
                    <div>
                        <span onClick={Delete}>
                            Delete
                            <DeleteIcon />
                        </span>
                    </div>
                </CardListContainer>
            </RightContainer>
        </Header>
        <Post>
            <img src="https://images.unsplash.com/photo-1647823082695-58562e2d1917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" />

        </Post>
        <Caption >
            <span>Tino</span> : <p>Working on a social media website.</p>
        </Caption>
    </Container>
  )
}

export default Posts;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 714px;
    background-color: white;
    margin: 20px auto;
    border-radius: 4px;
    padding-bottom: 5px;

    @media(min-width: 1024px) {
        margin-top: 20px;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
    margin-bottom: 10px;
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
    display: flex;
    align-items: center;
    position: relative;
`;

const Post = styled.div`
    width: 100%;
    img {
        width: 100%;
        object-fit: contain;
    }
`;

const Caption = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-top: 5px;

    span {
        margin-left: 5px;
        font-family: "Poppins", sans-serif,
        margin-right: 3px;
    }

    p {
        margin-left: 5px;
        font-weight: 600;
        font-size: small;
        color: gray;
    }
`;


const CardListContainer = styled.div`
    position: absolute;
    z-index: 999;
    background-color: white;
    bottom: -80px;
    left: -30px;
    width: 150px;
    height: 100px;
    border-radius: 4px;

    display: ${(props) => (props.show ? "block": "none")};
    transition: all 150ms ease-out;

    div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        transition: all 150ms ease-out;
        color: lightgray;
        display: flex;
        align-items: center;
        cursor: pointer;
        :hover {
            color: red;
        }
    }
`;