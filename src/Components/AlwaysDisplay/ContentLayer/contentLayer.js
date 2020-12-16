import React from 'react'
import {Route} from "react-router-dom";
import Courses from "../../Courses/courses";
import Profile from "../../Profile/profile";

function ContentLayer () {
    return(
        <div>

            <Route path='/courses' render={() => <Courses/> } />
            <Route path='/profile' render={() => <Profile/> } />

        </div>
    )
}


export default ContentLayer