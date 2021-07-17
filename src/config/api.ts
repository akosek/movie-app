export const minAPIVersion = 1;

const ENV = {
    dev: {
        apiUrl: '',
    },
    prod: {
        apiUrl: '',
    },
};

const API_URL = process.env.PROD ? ENV.prod.apiUrl : ENV.dev.apiUrl;

const API = {
    baseURL: `${API_URL}`
};

export const API_ROUTES = {
    USER: (userId: string) => `${API.baseURL}/user/${userId}`,
    GET_ORDER: (orderId: string) => `${API.baseURL}/customer/orders/${orderId}`,
};
