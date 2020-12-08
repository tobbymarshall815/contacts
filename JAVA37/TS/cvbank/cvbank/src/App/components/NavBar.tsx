import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

import Icon from '../../icons/logo.png';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface Iprops{
    userName?: string
}

const NavBarDiv = styled.div`
    width: 100vw;
    height: calc(100vw / 20);
    background-color: #18A4E0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSideDiv = styled.div`
    height: 100%;
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    padding: 0 25px;
`;

const RightSideDiv = styled.div`
    height: 100%;
    width: calc(100% / 3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 50px;
`;

const RightSideUserCard = styled.div`
    height: 100%,
    width: calc(100% / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RightSideDivUnlogged = styled.div`
    height: 100%;
    padding: 0 75px;
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    width: 29px;
    height: 29px;
    background-image: url(${Icon});
    background-size: cover;
`;

const NavBarLoggedIn = (userName: string) => {
    return (
        <NavBarDiv>
            <LeftSideDiv>
                <Logo />
                <Typography color="secondary"><Box component="h2" fontWeight="fontWeightLight">GLOBAL<b>CV</b>BANK</Box></Typography>
            </LeftSideDiv>

            <RightSideDiv>
                <RightSideUserCard>
                    <AccountCircleIcon color="secondary" style={{margin: "0 15px"}}/>
                <Typography color="secondary" variant="h3"> {userName} </Typography>
                </RightSideUserCard>
                <ExitToAppIcon color="secondary"/>
            </RightSideDiv>
        </NavBarDiv>
    );
}

const NavBarUnlogged = () => {
    return (
        <NavBarDiv>
            <LeftSideDiv>
                <div>
                    <Typography color="secondary" variant="h1">GLOBAL<b>CV</b>BANK</Typography>
                </div>
            </LeftSideDiv>

            <RightSideDivUnlogged>
            <Button variant="contained">Login</Button>
            </RightSideDivUnlogged>
        </NavBarDiv>
    );
}

const NavBar = (props: Iprops):JSX.Element => {
    return (props.userName != null ? NavBarLoggedIn(props.userName) : NavBarUnlogged());
}

export default NavBar;