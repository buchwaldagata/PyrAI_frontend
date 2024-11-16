import React, { FC } from 'react'
import { Card, Col, Row } from 'antd';

interface ItemsList {
	id: number;
	name: string;
	imgUrl: string;

}

interface Props {
	list: ItemsList[];
}

export const ProductList: FC<Props> = (props) => {

	const { list } = props;

	return (
		<div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {list.map(product => (
          <Col span={8} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.imgUrl} />}
            >
              id: {product.id}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
	)
}
