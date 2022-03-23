const DOMAIN = '/api/v1/';

export const get = (url: string) => fetch(DOMAIN + url);
