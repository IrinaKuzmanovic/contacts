import type { ColumnsType } from 'antd/lib/table'
import { Space } from 'antd'
import Icon from 'assets/Icon.svg'
import IconDelete from 'assets/IconDelete.svg'
import IconEdit from 'assets/IconEdit.svg'

export const tableColumns = (
  onFavouriteClick?: (id: number, favourite: boolean) => void,
  onDeleteClick?: (id: number) => void,
  onEditClick?: (id: number) => void
): ColumnsType<Contact> => [
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
        {record.favourite && (
          <img
            src={Icon}
            alt="icon"
            onClick={() =>
              onFavouriteClick && onFavouriteClick(record.id, false)
            }
          />
        )}
        {!record.favourite && (
          <img
            src={Icon}
            alt="icon"
            onClick={() =>
              onFavouriteClick && onFavouriteClick(record.id, true)
            }
          />
        )}
        <img
          src={IconDelete}
          alt="icon delete"
          onClick={() => onDeleteClick && onDeleteClick(record.id)}
        />
        <img
          src={IconEdit}
          alt="icon edit"
          onClick={() => onEditClick && onEditClick(record.id)}
        />
      </Space>
    )
  }
]

export interface Contact {
  id: number
  name: string
  email: string
  phoneNumber: string
  favourite: boolean
}
