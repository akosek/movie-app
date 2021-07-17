import useSWR from 'swr';

import { API_ROUTES } from '../config/api';
import { swrConfig, fetchWithToken } from '../config/request';

interface ResponseTypeDefinition{
    some_data: [{
        data: 'this is just an example'
    }];
}

export default function useGetOrder(orderId: string, token: string | null) {
    const route = API_ROUTES.GET_ORDER(orderId);
    const { data, mutate, error } = useSWR<ResponseTypeDefinition | null>([route, token], fetchWithToken, swrConfig);

    const loading = !data && !error;
    const refetch = () => mutate(null, true);

    return {
        loading,
        error,
        refetch,
        data: data || null,
    };
}
