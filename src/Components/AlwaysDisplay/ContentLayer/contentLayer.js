import React from 'react'
import {Route} from "react-router-dom";
import Courses from "../../Courses/courses";
import AboutAss from "../../Aboutass/aboutass";

function ContentLayer () {
    return(
        <div>

            <Route path='/courses' render={() => <Courses/> } />
            <Route path='/aboutus' render={() => <AboutAss/> } />

        </div>
    )
}

export default ContentLayer
