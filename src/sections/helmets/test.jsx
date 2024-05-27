import { useState } from 'react';
import axiosInstanceAssets, { fetcher2 } from 'src/utils/axios2';

import useSWRMutation from 'swr/mutation';

export const sendRequest = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstanceAssets.get(url, { ...config });
  return res.data;
};

export default function Test() {
  const [data, setData] = useState('j');
  const { trigger } = useSWRMutation(`/api.php?action=getDcsData${data}`, sendRequest);

  return (
    <button
      onClick={() => {
        trigger(setData('jobran'));
      }}
    >
      Create User
    </button>
  );
}
