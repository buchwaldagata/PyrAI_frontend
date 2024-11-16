
export async function fetchData(url: string): Promise<string> {
	const response = await fetch(url, {method: 'GET', headers: {'Content-type': 'text/html'}});
	if (!response.ok) {
	  throw new Error(`Failed to fetch: ${response.statusText}`);
	}
	return response.text();
  }

