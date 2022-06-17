import { FC, useState } from 'react'
import CInput from 'shared/CInput'
import { Form, Select } from 'antd'
import Labels from 'shared/Label'
import SecondaryButton from 'shared/SecondaryButton'
import PrimaryButton from 'shared/PrimaryButton'
import Avatar from 'assets/avatar.svg'
import './style.scss'
import { useSelector } from 'react-redux'
import store, { RootState } from 'store'
import { useNavigate, useParams } from 'react-router-dom'
import { Contact } from 'shared/tableColumns'
import { updateContact } from 'store/contacts/actions'
const { Option } = Select

type EditContactFormProps = {
  style?: React.CSSProperties
}

const EditContactForm: FC<EditContactFormProps> = ({ style }) => {
  let { id } = useParams()
  const navigate = useNavigate()

  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find(
      (contact) => contact.id == parseInt(id as string)
    )
  )
  const handleSubmit = (values: Contact) => {
    store.dispatch(updateContact({ ...values, id: parseInt(id as string) }))
    navigate('/')
  }
  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div style={style}>
      <div style={{ marginBottom: '24px' }}>
        <Labels text="Photo" />
        <div className="edit-contact-form__photo-heading">
          <img src={Avatar} alt="avatar" />
          <SecondaryButton text="Change" style={{ marginLeft: '20px' }} />
          <div className="edit-contact-form__photo-heading__empty"></div>
          <Select placeholder="Labels">
            <Option value="work">Work</Option>
            <Option value="family">Family</Option>
            <Option value="friends">Friends</Option>
          </Select>
        </div>
      </div>
      <Form
        onFinish={handleSubmit}
        initialValues={{
          name: contact?.name,
          email: contact?.email,
          phoneNumber: contact?.phoneNumber
        }}
      >
        <Labels text="Name" style={{ marginBottom: '4px' }} />
        <Form.Item name="name">
          <CInput />
        </Form.Item>
        <Labels text="Email address" style={{ marginBottom: '4px' }} />
        <Form.Item name="email">
          <CInput />
        </Form.Item>
        <Labels text="Phone number" style={{ marginBottom: '4px' }} />
        <Form.Item name="phoneNumber">
          <CInput />
        </Form.Item>
        <div className="edit-form_actions">
          <SecondaryButton text="Cancel" onClick={handleCancel} />
          <PrimaryButton
            text="Save"
            type="submit"
            style={{ marginLeft: '12px', width: '79px', height: '38px' }}
          />
        </div>
      </Form>
    </div>
  )
}

export default EditContactForm
