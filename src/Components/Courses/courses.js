import React, {useEffect} from 'react'
import * as axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {setCoursesDataAC} from "../../Redux/coursesReducer";
import CoursesCard from "./coursesCard";

function Courses(props) {

    const dispatch = useDispatch()
    const coursesData = useSelector(state => state.courses.coursesData)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
        res => {
            dispatch(setCoursesDataAC(res.data))
        }
    )
}, [])

    let coursesTitle

    if (coursesData !== null){
        coursesTitle = coursesData.map (item => <CoursesCard cardData = {item}/>)
    }

 return (

         <div>
             {coursesTitle}
         </div>
   )
}

export default Courses
