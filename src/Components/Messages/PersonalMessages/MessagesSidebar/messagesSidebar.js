import React from "react";
import css from './messagesSidebar.module.css'
import {Input} from 'antd';
import {Avatar} from 'antd';

const {Search} = Input;


function MessagesSidebar(props) {
    return (
        <div>
            <Search placeholder="Введите имя собеседника" onSearch={value => console.log(value)} enterButton/>

            <div className={css.scrollbox}>

                <div className={css.Titles}>

                        <Avatar size={40}>USER</Avatar>
                        <div className={css.Titles_info}>
                            <h2>Комната 1</h2>
                            <p>Last message</p>
                        </div>

                </div>

                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>

                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>
                <div className={css.Titles}>

                    <Avatar size={40}>USER</Avatar>
                    <div className={css.Titles_info}>
                        <h2>Комната 1</h2>
                        <p>Last message</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MessagesSidebar
