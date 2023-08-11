import { createClient } from "microcms-js-sdk";

export const indexClient = createClient({
  serviceDomain: "istoneyou-index",
  apiKey: process.env.INDEX_API_KEY,
});

export const careerClient = createClient({
  serviceDomain: "istoneyou-career",
  apiKey: process.env.CAREER_API_KEY,
});

export const qiitaClient = createClient({
  serviceDomain: "istoneyou-qiita",
  apiKey: process.env.QITA_API_KEY,
});
