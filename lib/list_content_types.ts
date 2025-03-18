import { getEnvironment } from "./contentful";

async function listContentTypes() {
  try {
    // Access the space and environment
     const environment = await getEnvironment();
   
    // Get all content types in the environment
    const contentTypes = await environment.getContentTypes();

    // List content type names and IDs
    console.log(JSON.stringify(contentTypes, null, 4))
  } catch (error) {
    console.error("Error fetching content types:", error);
  }
}

// Execute the function
listContentTypes();
