import * as management from "contentful-management";

const createClient = management.createClient;
const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getEnvironment() {
  const space = await client.getSpace(
    process.env.CONTENTFUL_SPACE_ID as string
  );
  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID as string);
}
