/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Col, Layout, Row, Tag } from "antd";
import Search from "antd/es/input/Search";
import { Project } from "../components/product_list/Project";
import s from "./Products.module.scss";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../api/products/products";

export default function ProductsInvestor() {
  const [data, setData] = useState<
    { business: string; emails: string; url: string; keywords: string }[]
  >([]);
  useEffect(() => {
    fetchAllProducts(
      "https://svqyzbzssx.us-east-1.awsapprunner.com/getArticlesAsInvestor",
      setData
    );
  }, []);

  return (
    <Layout style={{ padding: "24px" }} className={s.wrapper}>
      <Search
        placeholder="Search interesting project..."
        allowClear
        enterButton
      />
      <Row justify={"space-between"} style={{ marginTop: "15px" }}>
        <Col>Trending searches:</Col>
        <Col>
          <Tag>Machine learning</Tag>
        </Col>
        <Col>
          <Tag>AI</Tag>
        </Col>
        <Col>
          <Tag>Deep learning</Tag>
        </Col>
        <Col>
          <Tag>Computer vision</Tag>
        </Col>
        <Col>
          <Tag>Robotics</Tag>
        </Col>
        <Col>
          <Tag>Natural language processing</Tag>
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
        className={s.content}
      >
        {data.length !== 0
          ? data.map((project: any, index) => (
              <Project
                project={project}
                key={index}
                id={index}
                type="Investors"
              />
            ))
          : null}
      </div>
    </Layout>
  );
}
