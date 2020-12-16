import React from 'react'
import {Card, Avatar} from 'antd';
import css from './profile.module.css';
import {List, Typography, Divider} from 'antd';
import Marks from "./marks";


function Profile() {
    const {Meta} = Card;
    const data = [
        'Номер телефона: 89011111111',
        'Дата рождения: 12.34.5678',
        'Почта: ya.samiy.krutoi@mail.ru',
    ];

    return (
        <div>

            <h1 className={css.myProfile}><b>
                Мой профиль
            </b>
            </h1>


                <Meta className={css.photo}
                      title="Фамилия Имя"
                      description="Группа"
                />
            <div className={css.infoWrapper}>
                <Card className={css.inform}
                      style={{width: 200}}
                      cover={
                          <img
                              alt="photo"
                              src="https://blinmen.ru/wp-content/uploads/2011/09/user-profile.png"
                          />
                      }
                    // actions={[
                    //     <SettingOutlined key="setting" />,
                    //     <EditOutlined key="edit" />,
                    //     <EllipsisOutlined key="ellipsis" />,
                    // ]}
                >

                </Card>
            <div>

                {/*<Divider className = {css.info}>Информация</Divider>*/}
                <List className={css.info}
                      size="big"
                      header={<div>Был(а) в сети 1 час назад</div>}
                      footer={<div>Статус</div>}
                    // bordered
                      dataSource={data}
                      renderItem={item => <List.Item>{item}</List.Item>}
                />

            </div>
            </div>

            <Marks/>


        </div>)

}


export default Profile
