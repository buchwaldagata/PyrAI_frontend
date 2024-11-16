/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Modal, Button, Form, Input, Upload, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TagAdder from "./TagAdder";

// const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PaperForm = (props: { isModalOpen: boolean; setIsModalOpen: any }) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log(values);
  };

  //   const onReset = () => {
  //     form.resetFields();
  //   };

  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Add your article"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 1200 }}
        >
          <Form.Item
            name={["user", "abstract"]}
            label="abstract"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Form>
        <Divider />
        <p>Proposal generated keywords:</p>
        <TagAdder />
      </Modal>
    </div>
  );
};

export default PaperForm;
