import { FC } from 'react'
import Input from 'shared/CInput'
import { Form, Select } from 'antd'
import Labels from 'shared/Label'
import SecondaryButton from 'shared/SecondaryButton'
import PrimaryButton from 'shared/PrimaryButton'
import Avatar from 'assets/Avatar.svg'
import './style.scss'
const { Option } = Select

type EditContactFormProps = {
  style?: React.CSSProperties
}

const EditContactForm: FC<EditContactFormProps> = ({ style }) => {
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
      <Form>
        <Labels text="Name" style={{ marginBottom: '4px' }} />
        <Input style={{ marginBottom: '24px' }} />
        <Labels text="Email address" style={{ marginBottom: '4px' }} />
        <Input style={{ marginBottom: '24px' }} />
        <Labels text="Phone number" style={{ marginBottom: '4px' }} />
        <Input />
        <div className="edit-form_actions">
          <SecondaryButton text="Cancel" />
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
