import React, { FC, useState } from 'react'
import CInput from 'shared/CInput'
import { Form, Select } from 'antd'
import Labels from 'shared/Label'
import SecondaryButton from 'shared/SecondaryButton'
import PrimaryButton from 'shared/PrimaryButton'
import Avatar from 'assets/avatar.svg'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import store from 'store'
import { Contact } from 'shared/tableColumns'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { addContact } from 'store/contacts/actions'

const { Option } = Select

type CreateContactFormProps = {
  style?: React.CSSProperties
}

const CreateContactForm: FC<CreateContactFormProps> = ({ style }) => {
  const navigate = useNavigate()

  const handleSubmit = (values: Contact) => {
    store.dispatch(addContact(values))
    navigate('/')
  }

  const handleCancel = () => {
    navigate('/')
  }
  return (
    <div style={style}>
      <div style={{ marginBottom: '24px' }}>
        <Labels text="Photo" />
        <div className="create-contact-form__photo-heading">
          <img src={Avatar} alt="avatar" />
          <SecondaryButton text="Change" style={{ marginLeft: '20px' }} />
          <div className="create-contact-form__photo-heading__empty"></div>
          <Select placeholder="Labels">
            <Option value="work">Work</Option>
            <Option value="family">Family</Option>
            <Option value="friends">Friends</Option>
          </Select>
        </div>
      </div>
      <Form onFinish={handleSubmit}>
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
        <div className="form_actions">
          <SecondaryButton text="Cancel" onClick={handleCancel} />
          <PrimaryButton
            text="Create"
            type="submit"
            style={{ marginLeft: '12px', width: '79px', height: '38px' }}
          />
        </div>
      </Form>
    </div>
  )
}
export default CreateContactForm
