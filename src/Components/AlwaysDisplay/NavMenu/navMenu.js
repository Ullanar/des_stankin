import React from 'react'
import {Menu} from 'antd';
import {UserOutlined, MailOutlined, BookOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

class NavMenu extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >

                <Menu.Item key="1"><UserOutlined /> Мой профиль</Menu.Item>
                <Menu.Item key="2"><BookOutlined />Курсы</Menu.Item>

                <SubMenu key="sub4" icon={<MailOutlined/>} title="Сообщения">
                    <Menu.Item key="4">Личные сообщения</Menu.Item>
                    <Menu.Item key="5">Чат</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default NavMenu
