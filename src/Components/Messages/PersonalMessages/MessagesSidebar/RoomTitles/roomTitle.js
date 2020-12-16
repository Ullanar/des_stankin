import React from "react";
import {Avatar} from 'antd';
import css from './roomTitle.module.css'

function RoomTitle(props) {
    return (
        <div className={css.Titles}>

            <Avatar size={40}>USER</Avatar>
            <div className={css.Titles_info}>
                {/*Название комнаты*/}
                {/*<h2>{props.room.roomName}</h2>*/}
                {/*Последнее сообщение*/}
                {/*<p>{props.room.lastMessage}</p>*/}
            </div>
        </div>
    )
}

export default RoomTitle
