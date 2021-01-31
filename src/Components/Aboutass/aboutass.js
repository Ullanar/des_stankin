import React, {useEffect} from 'react'
import "./aboutus.css"
import {connect} from "react-redux";
import {setUsersAC} from "../../Redux/mainReducer";
import * as axios from "axios";
import UserTitle from "./userTitle";


function AboutAss(props) {

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                props.setUsers(res.data)
                console.log('test')
            }
        )
    })

    let userTitles = null

    if (props.userData !== null) {
        userTitles = props.userData.map(user => <UserTitle name = {user.name} email = {user.email}/>)
    }


    return (
        <div style={wrapperStyle}>

            <div className='test_block'>
                {userTitles !== null && userTitles}
            </div>

        </div>
    )
}

const wrapperStyle = {
    padding: 20
}


export default connect(
    state => ({
        userData: state.main.usersData,
    }),
    dispatch => ({

        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData))
        }
    })
)(AboutAss)

