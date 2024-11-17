/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { message } from "antd";

export async function fetchData(url: string): Promise<string> {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-type": "text/html" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.text();
}

export interface ProductItem {
  business: string;
  authors?: string[];
  url?: string;
  keywords: string[];
}

// export async function fetchAllProducts(url: string): Promise<ProductItem[]> {
//   const response = await fetch(url, {
//     method: "GET",
//     headers: { "Content-type": "application/json" },
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to fetch products. ${response.statusText}`);
//   }
//   const products: ProductItem[] = await response.json();
//   return products;
// }

export function fetchAllProducts(url: string, setData: any) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", //localhost zabezpieczenie
    },
  };
  requestOptions.headers["Access-Control-Allow-Origin"] = "*";

  fetch(url, requestOptions)
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response.length === 0) {
        message.error("error");
      } else {
        setData(response);
      }
    })
    .catch((error: any) => {
      message.error("Something went wrong, try again");
    });
}
