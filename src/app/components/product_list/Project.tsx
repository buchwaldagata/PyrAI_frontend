"use client";
import React, { useState } from "react";
import { Card, Tag } from "antd";
// import image from "./Cover.png";

import s from "./ProductList.module.scss";
import {
  CommentOutlined,
  SaveOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import Link from "next/link";

const gradients = [
  "from-purple-400 to-pink-500",
  "from-cyan-400 to-blue-500",
  "from-green-400 to-emerald-500",
  "from-yellow-400 to-orange-500",
  "from-red-400 to-rose-500",
  "from-indigo-400 to-violet-500",
  "from-fuchsia-400 to-pink-500",
  "from-sky-400 to-indigo-500",
  "from-amber-400 to-red-500",
  "from-lime-400 to-green-500",
];

export const Project = (props: {
  project: { keywords: string[]; id: number; liked: number };
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  // Function to get a consistent gradient for a keyword
  const getGradient = (keyword: string) => {
    // Use the sum of character codes to get a consistent index
    const charSum = keyword
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return gradients[charSum % gradients.length];
  };

  return (
    <Card
      actions={[
        <div key="like" onClick={() => handleClick()} style={{ gap: "10px" }}>
          {isLiked ? <HeartFilled /> : <HeartOutlined />}
          <b>{props.project.liked}</b>
        </div>,

        <SaveOutlined key="edit" />,

        <div
          key="ellipsis"
          onClick={() => handleClick()}
          style={{ gap: "10px" }}
        >
          <Link href="/product">
            <CommentOutlined size={30} />
          </Link>
        </div>,
      ]}
    >
      <div className={s.productList}>
        {props.project.keywords.map((keyword: string, id: number) => (
          <div key={id} className={s.card}>
            <div className={s.cardInner}>
              <Tag color="#f50">{keyword}</Tag>
              {/* <p>{product.description}</p> */}
              <span
                key={keyword}
                className={`px-4 py-2 rounded-full text-white font-medium
                  bg-gradient-to-r ${getGradient(keyword)}
                  transform transition-all duration-200
                  hover:scale-105 hover:shadow-lg
                  cursor-pointer`}
              >
                {keyword}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
