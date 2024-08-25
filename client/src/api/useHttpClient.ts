type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

const fetchJson = async <T>(url: string, options: FetchOptions): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    // HTTPエラーの処理
    const errorData = await response.json();
    throw new Error(errorData.message || 'Fetch error');
  }

  return response.json();
};

export const get = <T>(url: string, headers?: HeadersInit) =>
  fetchJson<T>(url, { method: 'GET', headers });

export const post = <T>(url: string, body: unknown, headers?: HeadersInit) =>
  fetchJson<T>(url, { method: 'POST', headers, body: JSON.stringify(body) });
