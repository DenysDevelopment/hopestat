export const API_URL = `${process.env.APP_URL}/api`;

export const getAuthUrl = (string: string): string => `/auth${string}`;
export const getUsersUrl = (string: string): string => `/users${string}`;
export const getMoviesUrl = (string: string): string => `/movies${string}`;
export const getActorsUrl = (string: string): string => `/actors${string}`;
export const getRatingUrl = (string: string): string => `/rating${string}`;
export const getGenresUrl = (string: string): string => `/genres${string}`;
