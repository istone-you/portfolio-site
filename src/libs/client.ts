import { createClient } from "microcms-js-sdk";

export const indexClient = createClient({
  serviceDomain: process.env.INDEX_DOMAIN_NAME || "",
  apiKey: process.env.INDEX_API_KEY || "",
});

export const careerClient = createClient({
  serviceDomain: process.env.CAREER_DOMAIN_NAME || "",
  apiKey: process.env.CAREER_API_KEY || "",
});

export const skillClient = createClient({
  serviceDomain: process.env.SKILL_DOMAIN_NAME || "",
  apiKey: process.env.SKILL_API_KEY || "",
});

export const githubClient = createClient({
  serviceDomain: process.env.GITHUB_DOMAIN_NAME || "",
  apiKey: process.env.GITHUB_API_KEY || "",
});

export const qiitaClient = createClient({
  serviceDomain: process.env.QITA_DOMAIN_NAME || "",
  apiKey: process.env.QITA_API_KEY || "",
});
