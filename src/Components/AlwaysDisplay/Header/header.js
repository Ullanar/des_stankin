import React from 'react'
import { Menu } from 'antd';
import {BookOutlined, BugOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme={"dark"}>
                <Menu.Item key="1">
                    <NavLink to = '/aboutus'>
                        <BookOutlined/> About Us
                    </NavLink>
                </Menu.Item>

            </Menu>
    );
    }
}

export default Header

