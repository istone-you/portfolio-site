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

export const articleClient = createClient({
  serviceDomain: process.env.ARTICLE_DOMAIN_NAME || "",
  apiKey: process.env.ARTICLE_API_KEY || "",
});

export const booksClient = createClient({
  serviceDomain: process.env.BOOKS_DOMAIN_NAME || "",
  apiKey: process.env.BOOKS_API_KEY || "",
});
