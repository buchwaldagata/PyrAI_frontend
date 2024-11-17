/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createFromIconfontCN, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Divider, Input, Row, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import PaperForm from "../components/userForm/PaperForm";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const user = {
  name: "John Doe",
  email: "jon_doe.gmail.com",
  company: "Univerity of California",
  status: ["Searching for a investor", "Idea for a startup"],
  role: "Professor",
  interests: ["AI", "Machine Learning", "Data Science"],
  papers: [
    {
      title: "Paper 1",
      authors: ["John Doe", "Jane Doe"],
      date: "2021-01-01",
      status: "Published",
      keywords: ["AI", "Machine Learning", "Data Science"],
    },
    {
      title: "Paper 2",
      authors: ["John Doe", "Jane Doe"],
      date: "2021-01-01",
      status: "Published",
      keywords: ["AI", "Machine Learning", "Data Science", "Deep Learning"],
    },
  ],
};
export default function User() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [papers, setPapers] = useState(user.papers);
  const openAddPaperModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
		margin: "0 30%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}>
        <h1>Your profile</h1>
      </div>
      <Card title={user.name} bordered={true}>
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Reasercher"
        />
        <Row style={{ marginTop: "20px" }}>
          {user.status.map((status, index) => (
            <Tag color="#2db7f5" key={index}>
              {status}
            </Tag>
          ))}
        </Row>

        <Divider />
        <Row align="middle" justify="space-between">
          <Col>
            <p>Email:</p>
          </Col>
          <Col>
            <Input placeholder="Basic usage" value={user.email} />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col>
            <p>Google Scholar:</p>
          </Col>
          <Col>
            <Input placeholder="Basic usage" />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col>
            <p>Research Gate:</p>
          </Col>
          <Col>
            <Input placeholder="Basic usage" />
          </Col>
        </Row>
        <Row align="middle" justify="space-between">
          <Col>
            <p>LinkedIn:</p>
          </Col>
          <Col>
            <Input placeholder="Basic usage" />
          </Col>
        </Row>
		<Row>
			<Col>
			<Button type="primary">Save</Button>
			</Col>
		</Row>
        <Row
          align="middle"
          justify="space-between"
          style={{ marginTop: "15px" }}
        >
          <Col>
            <h4>Add your papers (optionally)</h4>
          </Col>
          <Col>
            <Button
              icon={<PlusOutlined />}
              onClick={openAddPaperModal}
              type="primary"
              style={{ marginLeft: "10px" }}
            />
          </Col>
        </Row>

        <PaperForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {papers.map((paper) => {
          return (
            <div
              key={paper.title}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {paper.keywords.map((keyword) => (
                    <Tag color="#f50" key={keyword}>
                      {keyword}
                    </Tag>
                  ))}{" "}
                </div>
                <div>
                  <Button type="text" icon={<EditOutlined />} />
                  <Button type="text" icon={<DeleteOutlined />} />
                </div>
              </div>
              {paper.title},{"  "} {paper.authors}
              <br />
              {paper.date} {paper.status} {paper.keywords}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
