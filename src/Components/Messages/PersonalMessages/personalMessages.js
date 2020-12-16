import React from "react";
import MessagesSidebar from "./MessagesSidebar/messagesSidebar";
import MessagesContent from "./MessagesContent/messagesContent";
import css from './personalMessages.module.css'


function PersonalMessages(props) {
    return (
        <div>
            {/*{console.log(props)}*/}
            <div className={css.body}>
                <MessagesSidebar rooms = {props.rooms}/>
                <MessagesContent messages = {props.messages}/>
            </div>
        </div>
    )

}

export default PersonalMessages;
