import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ChangeEvent, createElement } from "react";
import { fetchData } from "../api/products/products";
import { ProductList } from "../components/product_list/ProductList";
import Search from 'antd/es/input/Search';

export default function Products() {
	const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
		(icon, index) => {
		const key = String(index + 1);
	
		return {
			key: `sub${key}`,
			icon: createElement(icon),
			label: `subnav ${key}`, // Tytuł rozwijanego menu
	
			// Generowanie 4 elementów w menu dla każdego rozwinięcia
			children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey.toString(),
				label: `option ${subKey}`,
			};
			}),
		};
		}
	);
	async function getData() {
		
		const data = await fetchData('https://gkhhvx35ks.us-east-1.awsapprunner.com/first-web/my_name');
		console.log('Data fetched:', data);
		return data;
	}
	
	getData();	

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
				<Search placeholder="Search..." allowClear enterButton/>
			<ProductList list={[{id: 1, name: "Motor nowoczesny", price: 10000, description: "Taki opis", imgUrl: 'https://picsum.photos/700/600'},{id: 2, name: "Motor nowoczesny", price: 10000, description: "Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisis vehicula.", imgUrl: 'https://picsum.photos/700/700'}]}></ProductList>
		</Layout>
	);
};
