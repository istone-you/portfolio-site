import { createClient } from "microcms-js-sdk";

export const indexClient = createClient({
  serviceDomain: "istoneyou-index",
  apiKey: process.env.INDEX_API_KEY,
});

export const careerClient = createClient({
  serviceDomain: "istoneyou-career",
  apiKey: process.env.CAREER_API_KEY,
});

export const skillClient = createClient({
  serviceDomain: "istoneyou-skill",
  apiKey: process.env.SKILL_API_KEY,
});

export const githubClient = createClient({
  serviceDomain: "istoneyou-github",
  apiKey: process.env.GITHUB_API_KEY,
});

export const qiitaClient = createClient({
  serviceDomain: "istoneyou-qiita",
  apiKey: process.env.QITA_API_KEY,
});
