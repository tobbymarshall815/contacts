import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Skill Verification
import SkillRequests from './pages/SkillVerification/Requests';
import SkillPending from './pages/SkillVerification/Pending';
import SkillVerified from './pages/SkillVerification/Verified';
import SkillRejected from './pages/SkillVerification/Rejected';

//Companies
import ComRequsts from './pages/Companies/Requests';
import ComRejected from './pages/Companies/Rejected';
import ComArchive from './pages/Companies/Archive';

//Contacts
import ExpertBook from './pages/Contacts/ExpertBook';

const Test1 = () => {
    return <h1>TEST1</h1>
}

const Test2 = () => {
    return <h1>TEST2</h1>
}

function Router():JSX.Element{
    return <>
            <Switch>
                <Route path="/" exact><Redirect to="/skill_verification/requests" /></Route>
                <Route path="/skill_verification" exact><Redirect to="/skill_verification/requests" /></Route>
                <Route exact path="/skill_verification/requests" component={SkillRequests} />
                <Route exact path="/skill_verification/pending"  component={SkillPending}/> 
                <Route exact path="/skill_verification/verified" component={SkillVerified}/> 
                <Route exact path="/skill_verification/rejected" component={SkillRejected}/> 

                <Route path="/companies" exact><Redirect to="/companies/requests" /></Route>
                <Route exact path="/companies/requests" component={ComRequsts}/> 
                <Route exact path="/companies/rejected" component={ComRejected}/> 
                <Route exact path="/companies/archive" component={ComArchive}/> 

                <Route path="/contacts" exact><Redirect to="/contacts/expertbook" /></Route>
                <Route exact path="/contacts/expertbook" component={ExpertBook}/>  
            </Switch>
    </>;
}

export default Router;