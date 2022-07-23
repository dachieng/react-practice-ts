// export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const API_BASE_URL = 'http://localhost:5000';

type Method = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

export const getFetchConfig = (
  method?: Method,
  token?: string,
  data?: any
): RequestInit => {
  return {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`
    }
  };
};
