import { SWRConfiguration, Revalidator } from 'swr';
import axios from 'axios';

const noCacheHeaders = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 0,
};

export const axiosConfig = (token?: string | null, opts?: any, noCache = false) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            ...(noCache && noCacheHeaders),
        },
        ...opts,
    };
};

export const postWithToken = async (url: string, token: string, payload?: unknown): Promise<any> => {
    const { data } = await axios.post(url, payload || null, axiosConfig(token));
    return data;
};

export const post = async (url: string, payload?: unknown, token?: string | null): Promise<any> => {
    if (token) return postWithToken(url, token, payload);
    const { data } = await axios.post(url, payload || null, {
        headers: { 'Cache-Control': 'no-cache' },
    });
    return data;
};

export const removeWithToken = async (url: string, token?: string | null): Promise<any> => {
    const { data } = await axios.delete(url, axiosConfig(token));
    return data;
};

export const remove = async (url: string, token?: string | null): Promise<any> => {
    if (token) return removeWithToken(url, token);
    const { data } = await axios.delete(url);
    return data;
};

export const putWithToken = async (url: string, token: string, payload?: unknown): Promise<any> => {
    const { data } = await axios.put(url, payload || null, axiosConfig(token));
    return data;
};

export const put = async (url: string, payload?: unknown, token?: string | null): Promise<any> => {
    if (token) return putWithToken(url, token, payload);
    const { data } = await axios.put(url, payload || null);
    return data;
};

export const fetchWithToken = (path: string, token: string | null) => axios.get(path, axiosConfig(token)).then((res) => res.data);

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const swrConfig = {
    revalidateOnFocus: true,
    onErrorRetry: (error: any, key: string, config: SWRConfiguration, revalidate: Revalidator, { retryCount }: { retryCount: number }) => {
        // Never retry on 404.
        if (error.status === 404) return;
        // Only retry up to 5 times.
        if (retryCount >= 5) return;
        // Retry after 5 seconds.
        const tid = setTimeout(() => {
            clearTimeout(tid);
            revalidate({ retryCount: retryCount + 1 });
        }, 5000);
    },
};
