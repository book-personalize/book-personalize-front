import React, { useState } from 'react'
import { Upload, Modal } from 'antd'

const uploadButton = (
  <div>
    <div className="ant-upload-text">Upload</div>
  </div>
)

const PicturesWall: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [preview, setPreview] = useState('')
  const [fileList, setFileList] = useState([])

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const handleCancel = () => setVisible(false)

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setVisible(true)
    setPreview(file.url || file.preview)
  }

  const handleChange = ({ fileList }: any) => setFileList(fileList)

  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={visible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={preview} />
      </Modal>
    </div>
  )
}

export default PicturesWall
