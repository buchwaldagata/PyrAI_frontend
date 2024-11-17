
export async function fetchData(url: string): Promise<string> {
	const response = await fetch(url, {method: 'GET', headers: {'Content-type': 'text/html'}});
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

export async function fetchAllProducts(url: string): Promise<ProductItem[]> {
	const response = await fetch(url, {method: 'GET', headers: {'Content-type': 'application/json'}});
	if(!response.ok)
	{
		throw new Error(`Failed to fetch products. ${response.statusText}`);
	}
	const products: ProductItem[] = await response.json();
    return products;
}