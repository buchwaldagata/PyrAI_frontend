import { Card } from "antd";
import React from "react";

const tempdata = {
  title: "Project Title",
  description: "Project Description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  liked: 0,
  google_scholar: "https://scholar.google.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  article: "https://arxiv.org",
};
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { ProductItem } from "@/app/api/products/products";

export default function ProjectAdditionals(props: { data: { business: ProductItem[] | string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; }) {


	
  return (
    <Card
      style={{ width: "100%" }}
      title="Read more about project"
      extra={
        <Link href="/products">
          <CloseOutlined />
        </Link>
      }
    >
      <p>{props.data.business}</p>
      <p>Keywords: {tempdata.keywords.join(", ")}</p>
      <p>Liked: {tempdata.liked}</p>
      <p>
        Google Scholar:{" "}
        <a href={tempdata.google_scholar}>{tempdata.google_scholar}</a>
      </p>
      <p>
        Github: <a href={tempdata.github}>{tempdata.github}</a>
      </p>
      <p>
        Linkedin: <a href={tempdata.linkedin}>{tempdata.linkedin}</a>
      </p>
      <p>
        Article: <a href={tempdata.article}>{tempdata.article}</a>
      </p>
    </Card>
  );
}