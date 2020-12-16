import React from "react";
import css from './messagesSidebar.module.css'
import {Input} from 'antd';
const {Search} = Input;


function MessagesSidebar(props) {
    return (
        <div>            <Search placeholder="Введите имя собеседника" onSearch={value => console.log(value)} enterButton/>

            <div className={css.scrollbox}>
                {/*{props.rooms}*/}

            </div>
        </div>
    )
}

export default MessagesSidebar
