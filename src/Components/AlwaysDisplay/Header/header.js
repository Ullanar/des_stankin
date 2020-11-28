import React from 'react'
import { Menu } from 'antd';
import {BugOutlined} from '@ant-design/icons';

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
                <Menu.Item key="mail" icon={<BugOutlined />}>
                    About Us
                </Menu.Item>

            </Menu>
        );
    }
}

export default Header
