"use client";
import { Button, Layout } from "antd";
import Search from "antd/es/input/Search";
import { Project } from "../components/product_list/Project";
import s from './Products.module.scss';
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

  return (
	<div className={s.wrapper}>
    <Layout className={s.productsContainer}>
      {/* <Sider width={200}>
					<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%' }}
					items={items2}
					/>
				</Sider> */}
      <Search
        placeholder="Search interesting project..."
        allowClear
        enterButton
      />
      <div>
        <Button type="primary">Search hotness</Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {exampleproject.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </Layout>
	</div>
  );
}
