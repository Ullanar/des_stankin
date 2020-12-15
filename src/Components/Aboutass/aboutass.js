import React from 'react'
import {Card, Row, Col} from 'antd';
import "./aboutus.css"

const {Meta} = Card;

function AboutAss() {
    const imgSources = [
        {
            src: 'images/lev.jpg',
            text: 'TeamLead'
        },
        {
            src: 'images/Лиза А.jpg',
            text: 'Text',
        },
        {
            src: 'images/Лиза Ш.jpg',
            text: 'Text',
        },
        {
            src: 'images/Леха.jpg',
            text: 'Text',
        },
    ]
    return (
        <div style={wrapperStyle}>
            <h1 align="center"><b>Кто мы такие?</b></h1>
            <p><h1>Мы перспективная команда, которая изменит мир образования в лучшую сторону!</h1></p>
            <h2 align="left">TeamLead</h2>
            <Row justify='center' wrap>
                {imgSources.map((item, i) => (
                    <Col className="gutter-row" span={5}>
                        <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="" src={item.src}/>}
                        >
                            <Meta title={item.text}/>
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