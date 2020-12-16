import React from 'react'
import {Route} from "react-router-dom";
import Courses from "../../Courses/courses";
import AboutAss from "../../Aboutass/aboutass";
import Chat from "../../Messages/Chat/chat";
import PersonalMessages from "../../Messages/PersonalMessages/personalMessages";

function ContentLayer () {
    return(
        <div>

            <Route path='/courses' render={() => <Courses/> } />
            <Route path='/chat' render={() => <Chat/> } />
            <Route path='/pm' render={() => <PersonalMessages/> } />
            <Route path='/aboutus' render={() => <AboutAss/> } />

        </div>
    )
}

export default ContentLayer
