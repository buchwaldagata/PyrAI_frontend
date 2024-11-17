"use client";
import { Col, Layout, Row, Tag } from "antd";
import Search from "antd/es/input/Search";
import { Project } from "../components/product_list/Project";
import s from './Products.module.scss';
import { sendData } from "../api/search/search";
export default function Products() {
  const exampleproject = [
    {
      keywords: ["AI", "Machine Learning", "Data Science"],
      id: 1,
      liked: 1243,
    },
    {
      keywords: ["AI", "Machine Learning", "Data Science", "Deep Learning"],
      id: 2,
      liked: 987,
    },
    {
      keywords: [
        "AI",
        "Machine Learning",
        "Data Science",
        "Deep Learning",
        "Neural Networks",
      ],
      id: 3,
      liked: 456,
    },
    { keywords: ["AI", "Robotics", "Automation"], id: 4, liked: 789 },
    {
      keywords: ["AI", "Natural Language Processing", "Chatbots"],
      id: 5,
      liked: 321,
    },
    {
      keywords: ["AI", "Computer Vision", "Image Recognition"],
      id: 6,
      liked: 654,
    },
    {
      keywords: ["AI", "Reinforcement Learning", "Game AI"],
      id: 7,
      liked: 432,
    },
    {
      keywords: ["AI", "Speech Recognition", "Voice Assistants"],
      id: 8,
      liked: 876,
    },
    { keywords: ["AI", "Predictive Analytics", "Big Data"], id: 9, liked: 543 },
    {
      keywords: ["AI", "Recommendation Systems", "Personalization"],
      id: 10,
      liked: 234,
    },
    {
      keywords: ["AI", "Cognitive Computing", "Decision Making"],
      id: 11,
      liked: 678,
    },
    {
      keywords: ["AI", "Autonomous Vehicles", "Self-Driving Cars"],
      id: 12,
      liked: 987,
    },
  ];

  async function sendSearch(searchPhrase: string) {
	const data = await sendData('https://svqyzbzssx.us-east-1.awsapprunner.com/getArticlesAsInvestors', searchPhrase);
	console.log('Data sent:', data);
	return data;
}

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	sendSearch(event.target.value);
  }

  return (
    <Layout style={{ padding: "24px" }} className={s.wrapper}>
      <Search
        placeholder="Search interesting project..."
        allowClear
        enterButton
		onChange={handleOnChange}
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
        {exampleproject.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </Layout>
  );
}
