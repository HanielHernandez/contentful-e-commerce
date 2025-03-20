import { algoliasearch } from "algoliasearch";

const client = algoliasearch("14W9JR1HV7", "32e1296fe1226907ea11cae7343334b5");

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch(
    "https://dashboard.algolia.com/api/1/sample_datasets?type=movie"
  );
  const movies = await datasetRequest.json();
  return await client.saveObjects({
    indexName: "movies_index",
    objects: movies,
  });
};

processRecords()
  .then(() => console.log("Successfully indexed objects!"))
  .catch((err) => console.error(err));
