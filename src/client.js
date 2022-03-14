import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "yiu4bw8j",
  dataset: "production",
  apiVersion: "2022-03-12",
  useCdn: true,
  token: process.env.REACT_APP_TOKEN,
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);
