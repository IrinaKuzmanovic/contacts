import type { ColumnsType } from 'antd/lib/table'
import { Space } from 'antd'
import FavouriteOn from 'assets/favouriteOn.svg'
import FavouriteOff from 'assets/favouriteOff.svg'
import DeleteIcon from 'assets/deleteIcon.svg'
import EditIcon from 'assets/editIcon.svg'

export const tableColumns = (
  onEditClick?: (id: number) => void,
  onDeleteClick?: (id: number) => void,
  onFavouriteClick?: (id: number, favourite: boolean) => void
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
    dataIndex: 'phoneNumber',
    key: 'phoneNumber'
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
          alt="delete icon "
          onClick={() => onDeleteClick && onDeleteClick(record.id)}
        />
        <img
          src={EditIcon}
          alt="edit icon "
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
