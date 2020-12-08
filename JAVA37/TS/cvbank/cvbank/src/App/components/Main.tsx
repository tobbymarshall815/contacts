import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Router from './Router';
import styled from 'styled-components';

//check if logged in 

const WorkArea = styled.div`
    display: flex;
`;

const Main = () => {
    return (<>
            <NavBar userName={"BISHOP"}/> 
        <WorkArea>
            <SideBar />
            <Router />
        </WorkArea>
    </>);
}

export default Main;