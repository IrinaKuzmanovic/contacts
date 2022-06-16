import React, { FC, useState } from 'react'
import { Button, Modal } from 'antd'

const CModal: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const handleOk = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(true)
  }
  return (
    <div>
      <Modal
        title="Delete contact"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this contact?</p>
      </Modal>
    </div>
  )
}
export default CModal
