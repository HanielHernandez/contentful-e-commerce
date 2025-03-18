import { ContentFields } from "contentful-management";
import { getEnvironment } from "./contentful";
import { schemas } from "./contentfulSchema";

async function createContentTypes():Promise<void> {
  const environment = await getEnvironment();

  for (const schema of schemas) {
    try {
      const contentType = await environment.getContentType(schema.id);
      console.log(`Content type '${schema.id}' already exists. Updating...`);
    } catch (error) {
      console.log(`Creating content type '${schema.id}'...`);
      const contentType = await environment.createContentTypeWithId(schema.id, {
        name: schema.name,
        fields: 
         
        
        schema.fields.map((field) => {
          const fieldConfig = {
            id: field.id,
            name: field.name,
            type: field.type,
            required: field.required || false,
            localized: field.localized || false
          } as ContentFields;

          // Handle references
          if (field.type === "Link" && field.linkType) {
            fieldConfig.linkType = field.linkType;
          }

          // Handle multiple references (array of links)
          if (field.type === "Array" && field.items) {
            fieldConfig.items = field.items;
          }

         
          return fieldConfig;
        }),
      });

      await contentType.publish();
      console.log(`Published content type: ${schema.id}`);
    }
  }
}

createContentTypes().catch(console.error);