import React, { FC, useState } from 'react'
import { Modal } from 'antd'

const DeleteContact: FC = () => {
  /*  const [isModalVisible, setIsModalVisible] = useState(true)
  const handleOk = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(true)
  }
 */
  return (
    <div>
      <div className="overlay" />
      <div className="modal"></div>
      {/* <Modal
        title="Delete contact"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this contact?</p>
      </Modal> */}
    </div>
  )
}
export default DeleteContact
