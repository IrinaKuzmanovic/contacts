import type { ColumnsType } from 'antd/lib/table'
import { Space } from 'antd'
import Icon from 'assets/Icon.svg'
import IconDelete from 'assets/IconDelete.svg'
import IconEdit from 'assets/IconEdit.svg'
import { DataType } from 'shared/DataType'

export const columns: ColumnsType<DataType> = [
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'PHONE NUMBER',
    dataIndex: 'address',
    key: 'address'
  },
  {
    render: (_, record) => (
      <Space size="middle">
        <img src={Icon} alt="icon" />
        <img src={IconDelete} alt="icon delete" />
        <img src={IconEdit} alt="icon edit" />
      </Space>
    )
  }
]
