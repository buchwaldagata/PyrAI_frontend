"use client";
import { useState, useEffect } from "react";
import { fetchAllProducts, ProductItem } from "../api/products/products";
//import { useSearchParams } from "next/navigation";
import ProjectAdditionals from "../components/product_list/ProjectAdditionals";
import s from "./Product.module.scss";

export default function Product() {
  //const searchParams = useSearchParams();
  //const id = searchParams.get("id");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAllProducts(
      "https://svqyzbzssx.us-east-1.awsapprunner.com/getArticlesAsBusiness"
    );
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.productContent}>
        {data.length != 0 ? <ProjectAdditionals /> : <div>Loading...</div>}
      </div>
    </div>
  );
}
