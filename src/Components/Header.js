import React from 'react';
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';
import {Avatar} from '@mui/material';

function Header() {
    return <Container>
        <Wrapper>
            <Logo>
                <span>Social</span>
            </Logo>
            <RightContainer>
                <PlusContainer>
                    <AddIcon />
                </PlusContainer>
                <User>
                    <Avatar />
                </User>
            </RightContainer>
        </Wrapper>
    </Container>
}

export default Header;

const Container = styled.div`
    position: sticky;
    z-index: 99999;
    top: 0;
    background-color: white;
    padding: 10px;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);
`; 

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
        max-width: 72rem;
        margin: 0 auto;
    }
`;

const Logo = styled.div`
    span {
        font-family: "Mochiy Pop One", sans-serif
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
`;

const User = styled.div`
    display: flex;
`;

const PlusContainer = styled.div`
    border: 5px solid rgba(107,114,128,1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    transition: all 150ms ease-out;
    svg {
        color: rgba(107,114,128,1);
        font-size: 20px;
    }

    :hover {
        border-color: rgba(37,99,235,1);
        svg {
            color: rgba(37,99,235,1)
        }
    }
`;