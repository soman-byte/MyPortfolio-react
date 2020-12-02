import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Landing from './landingpage';
import Project from './project';
import Resume from './resume';


export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route  path='/contact' component={Contact} />
            <Route  path='/project' component={Project} />
            <Route  path='/resume' component={Resume} />
        </Switch>
    )
}
