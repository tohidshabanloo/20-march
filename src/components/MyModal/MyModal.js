import { Modal } from "antd";

const MyModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
  title,
  cancelText,
  okText,
}) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      title={title}
      cancelText={cancelText}
      okText={okText}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
