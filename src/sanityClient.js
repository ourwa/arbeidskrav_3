import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rzoh5hjw",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});

export default client;
