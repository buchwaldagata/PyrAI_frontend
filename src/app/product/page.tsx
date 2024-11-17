/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import ProjectAdditionals from "../components/product_list/ProjectAdditionals";
import s from "./Product.module.scss";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../api/products/products";

export default function Product() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type") || "";
  const [data, setData] = useState<
    { business: string; emails: string; url: string; keywords: string }[]
  >([]);

  useEffect(() => {
    if (type) {
      fetchAllProducts(
        `https://svqyzbzssx.us-east-1.awsapprunner.com/getArticlesAs${type}`,
        setData
      );
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.productContent}>
        {data.length !== 0 ? (
          id !== null ? (
            <ProjectAdditionals data={data[Number(id)]} />
          ) : (
            <div>Loading...</div>
          )
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
