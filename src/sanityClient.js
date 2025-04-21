import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "rzoh5hjw",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});
