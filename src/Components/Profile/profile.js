import React, {useEffect} from 'react'
import {Card, Avatar} from 'antd';
import css from './profile.module.css';
import {List, Typography, Divider} from 'antd';
import Marks from "./marks";
import * as axios from "axios";
import {connect, useDispatch, useSelector} from "react-redux";
import {setProfileDataAC} from "../../Redux/profileReducer";
import {setMarksDataAC} from "../../Redux/marksReduser";




function Profile(props) {

    const dispatch = useDispatch ()
    const profileData = useSelector(state => state.profile.profileData)
    const marksData = useSelector(state => state.marks.profileData)

    useEffect(() => {
        axios.get ('https://jsonplaceholder.typicode.com/users'). then (
            res => {
                dispatch(setProfileDataAC(res.data))
            }
        )
        axios.get ('https://jsonplaceholder.typicode.com/users'). then (
            res => {
                dispatch(setMarksDataAC(res.data))
            }
        )
    }, [])

    if (profileData !== null){
        console.log(profileData)
    }

    const {Meta} = Card;
    const data = [
        'Номер телефона: ' + props.phone,
        'Дата рождения: ' + props.birthday,
        'Почта: ' + props.email,
    ];

    return (
        <div>

            <h1 className={css.myProfile}><b>
                Мой профиль
            </b>
            </h1>


            <Meta className={css.photo}
                  title={props.firstName + ' ' + props.lastName}
                  description={props.group}
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

            <Marks marks={props.marks}/>


        </div>)

}


export default connect(
    state => ({
        phone: state.profile.phone,
        birthday: state.profile.birthday,
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        group: state.profile.group,
        email: state.profile.email,
        marks: state.profile.marks

    }),
    dispatch => ({})
)(Profile)
