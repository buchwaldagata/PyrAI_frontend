import { Card } from "antd";
import React from "react";

import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

interface ProjectProps {
  description: string;
  emails: string;
  url: string;
  keywords: string;
}

export default function ProjectAdditionals(props: { data: ProjectProps }) {
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
      <p>Description: </p>
      <p>{props.data.description}</p>
      <p>Keywords: {props.data.keywords}</p>

      <p>
        URL: <a href={props.data.url}>{props.data.url}</a>
      </p>
      <p>
        email: <a href={props.data.emails}>{props.data.emails}</a>
      </p>
    </Card>
  );
}
