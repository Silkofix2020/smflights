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
    robots?: {
      UserAgent: string;
      Disallow?: string | string[];
      Allow?: string | string[];
      Sitemap?: string;
    };
    sitemap?: {
      xsl?: boolean;
      hostname?: string;
      gzip?: boolean;
      routes?: string[];
    };
  }
}
