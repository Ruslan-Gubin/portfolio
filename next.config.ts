import type { NextConfig } from "next";

const mode = process.env.NODE_ENV;
const isDev = mode === "development";

const nextConfig: NextConfig = {
  //i18n: {
  //  locales: ["en-US", "zh-CN"],
  //  defaultLocale: "en-US",
  //},
  env: {
    BACKEND_URL: isDev ? "https://back.dev" : "https://back.prod",
    ACCESS_TOKEN_COOKIE: isDev ? "ACCESS_TOKEN_DEV_" : "ACCESS_TOKEN_PROD_",
    REFRESH_TOKEN_COOKIE: isDev ? "REFRESH_TOKEN_DEV_" : "REFRESH_TOKEN_PROD_",
    DOMEN_URL: isDev ? "" : "",
    MODE: mode,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**", pathname: "**" },
      //{ protocol: 'http', hostname: 'test.en.feejoy.com:35333', pathname: '**' },
    ],
  },
};

export default nextConfig;
