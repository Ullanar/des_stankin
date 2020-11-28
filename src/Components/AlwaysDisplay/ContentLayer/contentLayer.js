import React from 'react'
import {Route} from "react-router-dom";
import Courses from "../../Courses/courses";

function ContentLayer () {
    return(
        <div>

            <Route path='/courses' render={() => <Courses/> } />

        </div>
    )
}

export default ContentLayer
