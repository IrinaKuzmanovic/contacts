import type { ColumnsType } from 'antd/lib/table'
import { Space } from 'antd'
import FavouriteOn from 'assets/favouriteOn.svg'
import FavouriteOff from 'assets/favouriteOff.svg'
import DeleteIcon from 'assets/deleteIcon.svg'
import EditIcon from 'assets/editIcon.svg'

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
            src={FavouriteOn}
            alt="icon"
            onClick={() =>
              onFavouriteClick && onFavouriteClick(record.id, false)
            }
          />
        )}
        {!record.favourite && (
          <img
            src={FavouriteOff}
            alt="icon"
            onClick={() =>
              onFavouriteClick && onFavouriteClick(record.id, true)
            }
          />
        )}
        <img
          src={DeleteIcon}
          alt="icon delete"
          onClick={() => onDeleteClick && onDeleteClick(record.id)}
        />
        <img
          src={EditIcon}
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
