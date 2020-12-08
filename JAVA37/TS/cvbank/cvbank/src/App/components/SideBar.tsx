import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {NavLink, useLocation} from 'react-router-dom';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

//icons
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import BusinessIcon from '@material-ui/icons/Business';
import BlockRoundedIcon from '@material-ui/icons/BlockRounded';
import BookIcon from '@material-ui/icons/Book';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const MainSideBar = styled.div`
    height: 100vh;
    width: calc(100vw / 5.4);
    background-color: #EFF2F4;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SideBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
`;


const ListSideBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`  
    padding-left: 30px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 30px;
`;

const ListItemActive = styled.div` 
    background-color: #18A4E0;
    padding-left: 30px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 30px;
`;



const ListTextItem = styled.div`
    margin-left: 10px
`;

const Heading = styled.div`
    margin-bottom: -10px;
    margin-left: 25px;

`;

//active -> change icon color to secondary -> change component ListItem to ListItemActive

const SideBar = ():JSX.Element => {
    let location = useLocation();
    console.log(location.pathname);
    return getSideBar(location.pathname);
}

interface ParentCompProps {
    Icon: any;
    isActive: boolean;
    text: string;
  }

const getListItem = (props: ParentCompProps):JSX.Element => {
    const { Icon, isActive, text } = props;
    return isActive ?  
                        <ListItemActive>
                            <Icon color="secondary" />
                            <ListTextItem><NavLink to="/skill_verification/requests"><Typography variant="h4" color="secondary" display="block">{text}</Typography></NavLink></ListTextItem>
                        </ListItemActive>
                        :
                        <ListItem>
                            <PersonAddIcon color="primary"/>
                            <ListTextItem><NavLink to="/skill_verification/requests"><Typography variant="h4" color="primary">{text}</Typography></NavLink></ListTextItem>
                        </ListItem>
};


function getSideBar(activePath: string):JSX.Element{
    return (
        <MainSideBar>
                <SideBox>
                    <Heading><Typography color="primary"><Box component="h2" fontWeight="fontWeightRegular">Skills verification</Box></Typography></Heading>
                    <ListSideBar>
                        {/* {getListItem({Icon:<PersonAddIcon />, isActive:activePath === '/skill_verification/requests', text:'Requests'})} */}
                        {activePath === "/skill_verification/requests" ?  
                        <ListItemActive>
                            <PersonAddIcon color="secondary" />
                            <ListTextItem><NavLink to="/skill_verification/requests"><Typography variant="h4" color="secondary" display="block">Requests</Typography></NavLink></ListTextItem>
                        </ListItemActive>
                        :
                        <ListItem>
                            <PersonAddIcon color="primary"/>
                            <ListTextItem><NavLink to="/skill_verification/requests"><Typography variant="h4" color="primary">Requests</Typography></NavLink></ListTextItem>
                        </ListItem>}

                        {activePath === "/skill_verification/pending" ?  
                        <ListItemActive>
                            <ScheduleIcon color="secondary" />
                            <ListTextItem><NavLink to="/skill_verification/pending"><Typography variant="h4" color="secondary" display="block">Pending</Typography></NavLink></ListTextItem>
                        </ListItemActive>
                        :
                        <ListItem>
                            <ScheduleIcon color="primary"/>
                            <ListTextItem><NavLink to="/skill_verification/pending"><Typography variant="h4" color="primary">Pending</Typography></NavLink></ListTextItem>
                        </ListItem>}

                        <ListItem>
                            <EmojiEmotionsIcon color="primary"/>
                            <ListTextItem><NavLink to="/skill_verification/verified"><Typography variant="h4" color="primary">Verified</Typography></NavLink></ListTextItem>
                        </ListItem>
                        <ListItem>
                            <SentimentVeryDissatisfiedIcon color="primary"/>
                            <ListTextItem><NavLink to="/skill_verification/rejected"><Typography variant="h4" color="primary">Rejected</Typography></NavLink></ListTextItem>
                        </ListItem>
                    </ListSideBar>
                </SideBox>
                <SideBox>
                    <Heading><Typography color="primary"><Box component="h2" fontWeight="fontWeightRegular" >Companies</Box></Typography></Heading>
                    <ListSideBar>
                        <ListItem>
                            <BusinessIcon color="primary"/>
                            <ListTextItem><NavLink to="/companies/requests"><Typography variant="h4" color="primary">Requests</Typography></NavLink></ListTextItem>
                        </ListItem>
                        <ListItem>
                            <BlockRoundedIcon color="primary"/>
                            <ListTextItem><NavLink to="/companies/rejected"><Typography variant="h4" color="primary">Rejected</Typography></NavLink></ListTextItem>
                        </ListItem>
                        <ListItem>
                            <BookIcon color="primary"/>
                            <ListTextItem><NavLink to="/companies/archive"><Typography variant="h4" color="primary">Archive</Typography></NavLink></ListTextItem>
                        </ListItem>
                    </ListSideBar>
                </SideBox>
                <SideBox>
                    <Heading><Typography color="primary"><Box component="h2" fontWeight="fontWeightRegular">Contacts</Box></Typography></Heading>
                    <ListSideBar>
                        <ListItem>
                            <ImportContactsIcon color="primary"/>
                            <ListTextItem><NavLink to="/contacts/expertbook"><Typography variant="h4" color="primary">Expert Book</Typography></NavLink></ListTextItem>
                        </ListItem>
                    </ListSideBar>
                </SideBox>
            </MainSideBar>
    );
}

export default SideBar;