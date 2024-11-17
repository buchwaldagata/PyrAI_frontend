"use client";
import { fetchAllProducts, ProductItem } from "../api/products/products";
//import { useSearchParams } from "next/navigation";
import ProjectAdditionals from "../components/product_list/ProjectAdditionals";
import s from './Product.module.scss';


export default function Product() {
	//const searchParams = useSearchParams();
	//const id = searchParams.get("id");
	async function getData() {
		const data: ProductItem[] = await fetchAllProducts('https://svqyzbzssx.us-east-1.awsapprunner.com/getArticlesAsBusiness');
		console.log('Data fetched:', data);
		return data;
	}
	let data: ProductItem[] = [];
	getData().then(elem => data = elem);
	
	return (
		<div className={s.wrapper}>
			<div className={s.productContent}>
				<ProjectAdditionals data={data}/>
			</div>
		</div>
	);
}
