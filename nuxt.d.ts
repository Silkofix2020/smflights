import { NuxtConfig } from "nuxt/schema";

declare module "nuxt/schema" {
  interface NuxtConfig {
    gtag?: {
      id: string;
      config?: {
        anonymize_ip?: boolean;
        send_page_view?: boolean;
      };
    };
  }
}
