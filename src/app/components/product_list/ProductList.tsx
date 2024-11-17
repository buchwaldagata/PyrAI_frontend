import React, { FC } from 'react'
import s from './ProductList.module.scss';
import image1 from './Cover1.svg';
import image2 from './Cover2.svg';
import image3 from './Cover3.svg';
import { Image } from 'antd';
interface ItemsList {
	id: number;
	name?: string;
	imgUrl?: string;
	price?: number;
	description?: string;
}

interface Props {
	list: ItemsList[];
}

export const ProductList: FC<Props> = (props) => {

	const { list } = props;
	// expected to add images randomly here
	const images = [image1, image2, image3];
	const min = 0, max = 2;
	const number = Math.floor(Math.random() * (max - min + 1) + min);
	const id = "id" + Math.random().toString(16).slice(2);
	return (
	<div className={s.productList}>
		<Image src={images[number]} alt={id}/>
        {list.map(product => (
            <div
				key={product.id}
				className={s.card}
				>
				{id}
				<div className={s.cardInner}>
					<p className={s.header}>{product.name}</p>
					<p>{product.description}</p>
				</div>
            </div>
        ))}
    </div>
	)
}
