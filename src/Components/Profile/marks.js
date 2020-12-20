import React from 'react'

import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;


function Marks(props) {
    const data = props.marks
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
