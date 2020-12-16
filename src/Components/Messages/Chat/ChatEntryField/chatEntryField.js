import React from "react";
import {Button, Input} from 'antd';

const { TextArea } = Input;


function ChatEntryField() {

    return (
        <div style={{display: "flex"}}>
            <TextArea rows={4} style={{resize: 'none'}} id = 'textarea' />
            <Button type="primary">Send</Button>
        </div>
    );
}


export default ChatEntryField;
