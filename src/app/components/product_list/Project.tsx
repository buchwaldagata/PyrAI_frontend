"use client";
import React, { useEffect, useState } from "react";
import { Card, Tag } from "antd";
// import image from "./Cover.png";
import { useRouter } from "next/navigation";
import s from "./ProductList.module.scss";
import {
  CommentOutlined,
  SaveOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

export const Project = (props: {
  project: {
    description: string;
    emails: string;
    url: string;
    keywords: string;
  };
  id: number;
  type: "Business" | "Investors";
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  // Function to get a consistent gradient for a keyword
  useEffect(() => {
    const temp_keywords = props.project.keywords.split(",");
    setKeywords(temp_keywords);
  }, []);

  const router = useRouter();
  return (
    <Card
      actions={[
        <div key="like" onClick={() => handleClick()} style={{ gap: "10px" }}>
          {isLiked ? <HeartFilled /> : <HeartOutlined />}
          {"  "}
          <b>999</b>
        </div>,

        <SaveOutlined key="edit" />,

        <div
          key="ellipsis"
          onClick={() =>
            router.push(`/product?id=${props.id}&type=${props.type}`)
          }
          style={{ gap: "10px" }}
        >
          <CommentOutlined size={30} />
        </div>,
      ]}
    >
      <div className={s.gradientContainer}>
        {keywords.map((keyword: string, id: number) => (
          <div key={id} style={{ display: "flex", flexDirection: "column" }} className={s.item}>
            {/* <p>{product.description}</p> */}

            <Tag color="#fff" style={{ color: "#000" }}>
              {keyword}
            </Tag>
          </div>
        ))}
      </div>
      <p>{props.project.description}</p>
    </Card>
  );
};
