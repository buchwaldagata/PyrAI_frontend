"use client";
import React, { useState } from "react";
import { Avatar, Button, Card, Divider, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import TagAdder from "../components/userForm/TagAdder";
import { PlusOutlined } from "@ant-design/icons";
import PaperForm from "../components/userForm/PaperForm";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const openAddPaperModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>Your profile</h1>
      </div>
      <Card title={user.name} bordered={true} style={{ width: 1200 }}>
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="Card title"
          description="This is the description"
        />
        {user.status.map((status, index) => (
          <Tag color="#2db7f5" key={index}>
            {status}
          </Tag>
        ))}
        <p>{user.email}</p>
        <TagAdder />
        <p>Here is the user page</p>
        <Divider />
        <h2>Papers</h2>
        <Button
          icon={<PlusOutlined />}
          onClick={openAddPaperModal}
          type="primary"
        >
          Add paper
        </Button>
        <PaperForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        {user.papers.map((paper) => {
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
                }}
              >
                {paper.keywords.map((keyword) => (
                  <Tag color="#f50" key={keyword}>
                    {keyword}
                  </Tag>
                ))}{" "}
              </div>
              {paper.title} {paper.authors} {paper.date} {paper.status}{" "}
              {paper.keywords}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
