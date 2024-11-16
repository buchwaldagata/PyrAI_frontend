import React, { FC } from 'react'
import s from './ProductList.module.scss';

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

	return (
	<div className={s.productList}>
        {list.map(product => (
            <div
				key={product.id}
				className={s.card}
				>
				<div className={s.cardInner}>
					<p className={s.header}>{product.name}</p>
					<p>{product.description}</p>
				</div>
            </div>
        ))}
    </div>
	)
}
