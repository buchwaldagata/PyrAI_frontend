"use client"
import { Layout } from "antd";
import Search from 'antd/es/input/Search';
import { ChangeEvent, useEffect, useState } from "react";
import { fetchData } from "../api/products/products";
import { ProductList } from "../components/product_list/ProductList";
import s from './Products.module.scss';

const DEFAULT_DATA = [{id: 1, name: "Motor nowoczesny", price: 10000, description: "Taki opis", imgUrl: 'https://picsum.photos/700/600'},{id: 2, name: "Motor nowoczesny", price: 10000, description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis vehicula.", imgUrl: 'https://picsum.photos/700/700'}];

export default function Products() {
	const [products, setProducts] = useState<any[]>([]);


	async function getData() {
		
		const data = await fetchData('https://gkhhvx35ks.us-east-1.awsapprunner.com/first-web/my_name');
		
		console.log('Data fetched:', data);
		return data;
	}
	
	useEffect(() => {
		setProducts(DEFAULT_DATA);
		getData();	
	},[]);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event) {
			const result = products.filter(element => { element.name.toLowerCase().includes(event.target.value.toLowerCase()) })
			console.log(result)
			setProducts(result);
		} else {
		  	setProducts(DEFAULT_DATA); 
		}
	  };

	return (
		<Layout style={{ padding: '24px'}}>
				{/* <Sider width={200}>
					<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%' }}
					items={items2}
					/>
				</Sider> */}
				<Search placeholder="Search..." allowClear enterButton onSubmit={handleOnChange}/>
				{/* <span>
					<Search className={s.input} placeholder="Search..." onChange={handleOnChange}/>
					<button>Search</button>
				</span> */}

			<ProductList list={products}></ProductList>
		</Layout>
	);
};
