import React from 'react'

import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        subject: 'Математика',
        gaps: '3',
        mark: 32.9,
        teacher: 'Яновская Елена Александровна',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        subject: 'Информатика',
        gaps: '0',
        mark: 42,
        teacher: 'Чеканин Владислав Александрович',
        tags: ['loser'],
    },
    {
        key: '3',
        subject: 'Русский язык',
        gaps: '2',
        mark: 50.6,
        teacher: 'Трофимова Галина Константиновна',
        tags: ['cool', 'teacher'],
    },
];




function Marks() {
    return (
        <div>
            <Table dataSource={data}>
                <ColumnGroup title="">
                    <Column title="Предмет" dataIndex="subject" key="1" />
                    <Column title="Пропуски" dataIndex="gaps" key="2" />
                </ColumnGroup>
                <Column title="Текущая оценка" dataIndex="mark" key="3" />
                <Column title="Преподаватель" dataIndex="teacher" key="4" />

                <Column
                    title="Действия"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Курс {record.lastName}</a>
                            <a>Подробнее</a>
                        </Space>
                    )}
                />
            </Table>

        </div>
    )
}

export default Marks
