import React, { FC } from 'react'
import Input from 'shared/CInput'
import { Form, Select } from 'antd'
import Labels from 'shared/Label'
import SecondaryButton from 'shared/SecondaryButton'
import PrimaryButton from 'shared/PrimaryButton'
import Avatar from 'assets/avatar.svg'
import './style.scss'

const { Option } = Select

type CreateContactFormProps = {
  style?: React.CSSProperties
}

const CreateContactForm: FC<CreateContactFormProps> = ({ style }) => {
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
      <Form>
        <Labels text="Name" style={{ marginBottom: '4px' }} />
        <Input style={{ marginBottom: '24px' }} />
        <Labels text="Email address" style={{ marginBottom: '4px' }} />
        <Input style={{ marginBottom: '24px' }} />
        <Labels text="Phone number" style={{ marginBottom: '4px' }} />
        <Input />
        <div className="form_actions">
          <SecondaryButton text="Cancel" />
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
