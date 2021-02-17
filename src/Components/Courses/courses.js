import React from 'react'
import {Card} from 'antd';
import css from './courses.module.css'

function Courses() {
    const {Meta} = Card;
    return (

        <div>
            <h1 className={css.course}><b>Курсы</b></h1>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="Информатика" src="https://www.hse.ru/data/2019/03/15/1127237027/netw-1.jpg"
                              height="140"/>}>
                <Meta title="Информатика"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={< img alt="Математика"
                               src="https://cdn.iversity.org/courses/3264382b-96a1-4cba-a814-193527534ea9/70149019234600.jpg"
                               height="140"/>}>
                <Meta title="Математика"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={< img alt="Русский язык"
                               src="https://www.providentedge.com/wp-content/uploads/2016/03/Depositphotos_3449269_original.jpg"
                               height="140"/>}>
                <Meta title="Русский язык"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={< img alt="Биология"
                               src="https://gorod-plus.tv/sites/default/files/2020-01/dna-3539309_1920.jpg"
                               height="140"/>}>
                <Meta title="Биология"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="Химия"
                              src="https://mpdchemicals.com/beta/wp-content/uploads/2013/09/shutterstock_100495426.jpg"
                              height="140"/>}>
                <Meta title="Химия"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="Физика"
                              src="https://ab-news.ru/wp-content/uploads/2019/09/3343434444322.jpg"
                              height="140"/>}>
                <Meta title="Физика"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="Физическая культура"
                              src="https://whatsupusana.com/wp-content/uploads/2013/03/ScienceSlider.jpg"
                              height="140"/>}>
                <Meta title="Физическая культура"/>
            </Card>
            <Card className={css.cards}
                  hoverable
                  style={{width: 240}}
                  cover={<img alt="Обществознание"
                              src="https://businessman.ru/static/img/a/46104/400224/67573.jpg"
                              height="140"/>}>
                <Meta title="Обществознание"/>
            </Card>
        </div>
    )
}

export default Courses
