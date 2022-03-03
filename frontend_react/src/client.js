import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3t8pzdvf",
  dataset: "production",
  apiVersion: "2022-02-28",
  useCdn: true,
  token: "sk1kmIk1YVXSpiDiacyb7dpQKklqKZTzoXDp1PbwHqF9rB1DJbqxyQxVYnrZh6eyIIMeHb0yswzhSiQOlLf9GhKO72JRegfKqKlmkflMPNNZ4EdZcyvbbWkxYSahKQ4s8Sk8qjXxTeUgovoHZr6YlkJO8GDUX05skOM79Ohw9SgOjZZXyDlP",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
