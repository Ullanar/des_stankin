import React from 'react';
import ChatEntryField from './ChatEntryField/chatEntryField.js'
import css from './chat.module.css'
// import socket from "../../../DAL/Sockets/SocketIo";

class Chat extends React.Component {
    componentDidMount() {
        // socket.on('CHAT_SEND_MESSAGES', (messageText) => {
        //
        //     this.props.setNewMessage({
        //         id: Date.now(),
        //         messageText: messageText
        //     })
        // })
    }

    render() {
        return (
            <div className={css.chatWrapper}>

                <div className={css.messagesDisplay}>
                    {/*{this.props.messages}*/}
                </div>

                <div className={css.entryField}>
                    <ChatEntryField/>
                </div>
            </div>
        )
    }
}

export default Chat;
