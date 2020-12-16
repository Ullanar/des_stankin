import React from 'react'
import {Card, Row, Col} from 'antd';
import "./aboutus.css"

const {Meta} = Card;

function AboutAss() {
    const imgSources = [
        {
            src: 'images/lev.jpg',
            name: 'Лев Бубнов',
            text:'-Full Stack Dev.',
            text1:'-Team Lead',
            description:'Telegram: @ullanar'
        },
        {
            src: 'images/Лиза А.jpg',
            name: 'Акманова Лиза',
            text: '-FrontEnd Dev.',
            text1: '-QA',
            description:'Telegram: @akmanova'
        },
        {
            src: 'images/Лиза Ш.jpg',
            name: 'Шайгородская Лиза',
            text: '-FrontEnd Dev.',
            text1: '-UI/UX',
            description:'Telegram: @shveyga'
        },
        {
            src: 'images/Леха.jpg',
            name: 'Осипов Алексей',
            text: '-DevOps',
            text1: '-BackEnd Dev.',
            description:'Telegram: @AlexOsi02'
        },
    ]
    return (
        <div style={wrapperStyle}>
            <h1 align="center"><b>About Us</b></h1>
            <p><h2 align="center">Мы перспективная команда разработчиков, которая изменит мир дистанционного образования в лучшую сторону!</h2></p>
            <Row justify='center' wrap>
                {imgSources.map((item, i) => (
                    <Col className="gutter-row" span={5}>
                        <Card
                            hoverable
                            style={{ width: 210 }}
                            cover={<img alt="" src={item.src}/>}
                        >
                            <Meta title={item.name}/>
                            <Meta title={item.text}/>
                            <Meta title={item.text1}/>
                            <Meta description={item.description}/>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

const wrapperStyle = {
    padding: 20
}

export default AboutAss