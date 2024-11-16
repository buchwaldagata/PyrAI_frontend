import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { createElement } from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { ProductList } from "../components/product_list/ProductList";

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

  return (
	<Layout style={{ padding: '24px'}}>
			<Sider width={200}>
				<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%' }}
				items={items2}
				/>
			</Sider>
		<ProductList list={[{id: 1, name: "Motor nowoczesny", price: 10000, description: "Taki opis"}]}></ProductList>
	</Layout>
  );
};
