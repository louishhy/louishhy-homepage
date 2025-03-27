import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// IIFE to setup dev platform: workaround. See https://community.cloudflare.com/t/issues-running-nextjs-installed-with-npm-create-cloudflare-latest/754259/5
(() => {
  if (process.env.NODE_ENV === "development") {
    setupDevPlatform();
  }
})();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
