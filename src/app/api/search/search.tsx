export async function sendData(url: string, queryInfo: string): Promise<string> {
	const response = await fetch(url, {
		method: 'POST', 
		body: JSON.stringify({ query: queryInfo}),
		headers: {'Content-type': "application/json"}
	});
	if (!response.ok) {
	  throw new Error(`Failed to fetch: ${response.statusText}`);
	}
	return response.text();
  }