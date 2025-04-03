export const CONFIG_APP = {
  API_ENDPOINT: process.env.BACKEND_URL,
  ACCESS_TOKEN_COOKIE: process.env.ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE: process.env.REFRESH_TOKEN_COOKIE,
  PATH_UPLOADS: `${process.env.BACKEND_URL}/public/uploads/`,
  START_PAGE_AFTER_LOGIN: "/",
  DOMEN: process.env.DOMEN_URL,
  MODE: process.env.MODE,
} as const;
