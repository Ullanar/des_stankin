import React from 'react'
import {Menu} from 'antd';
import {UserOutlined, MailOutlined, BookOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

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

                <Menu.Item key="1"><UserOutlined/> Мой профиль</Menu.Item>
                <Menu.Item key="2">
                    <NavLink to='/courses'>
                        <BookOutlined/>Курсы
                    </NavLink>
                </Menu.Item>

                <SubMenu key="sub4" icon={<MailOutlined/>} title="Сообщения">

                    <Menu.Item key="4">
                        <NavLink to='pm'>
                            Личные сообщения
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <NavLink to='chat'>
                            Чат
                        </NavLink>
                    </Menu.Item>

                </SubMenu>
            </Menu>
        );
    }
}

export default NavMenu
