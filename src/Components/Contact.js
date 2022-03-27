import React from 'react';
import styled from 'styled-components';
import {Avatar} from '@mui/material';
import {selectName, selectPhoto, setLogOut} from '../features/User/userSlice';
import {useSelector} from 'react-redux';
import { signOut } from 'firebase/auth';

import {auth} from '../firebase';
import { useDispatch } from 'react-redux';

function Contact() {
    const name = useSelector(selectName);
    const photo = useSelector(selectPhoto);
    // const shortName = name.split(" ");
    const shortName = name?.split(" ");
    const dispatch = useDispatch();

    const LogOut = () => {
        signOut(auth, (result) => {
            dispatch(
                setLogOut({
                    name: null,
                    photo: null,
                    email: null
                })
            )
        });
    }

    return (
        <Container>
            <Header>
                <Avatar  src={photo} />
                <span>Hello {name ? shortName[0] : "Guest"}</span>
                <p onClick={LogOut} >Log Out</p>
            </Header>
        </Container>
    )
}

export default Contact;


const Container = styled.div`
    width: 382px;
    height: 231px;
    margin-right: 10px;
    background-color: white;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 20px;


`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 5px;
    padding-top: 20px;

    span {
        font-family: "Poppins", sans-serif;
        margin-left: 0.5rem;
        flex: 1;
    }
    p {
        padding: 0 5px;
        color: #60a5fa;
        font-weight: bold;
        cursor: pointer;
        :hover { 
            text-decoration: underline;
        }
    }

    svg {
        cursor: pointer;
        transition: all 150ms ease-out;
        :hover {
            opacity: 0.75;
        }
    }


`;