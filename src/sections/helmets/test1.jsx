import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { HOST_API } from 'src/config-global';

const axiosInstanceApi = axios.create({ baseURL: '/api' });

axiosInstanceApi.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstanceApi.get(url, { ...config });

  return res.data;
};
export default function Test1() {
  const { data, error } = useSWR('/api.php?action=getDcsData', fetcher);
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    return <p>Looding</p>;
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
