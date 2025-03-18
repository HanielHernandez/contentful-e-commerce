import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "03-add-links",
  migrateFunction(migration: Migration) {
    const productContentType = migration
      .createContentType("Link")
      .name("Link");

    productContentType
      .createField("icon")
      .name("Icon")
      .type("Text")
      .validations([{
        in: ['x','facebook','instagram','linkedin','mastodon','bluesky','youtube','linkedin']
      }])
      .required(true);

    productContentType
      .createField("text")
      .name("Text")
      .type("Symbol")
      .required(true);

    productContentType
      .createField("url")
      .name("URL")
      .type("Symbol")
      .required(true)
      .validations([
        {
          regexp: {
            pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$", // Enforce URL-friendly format
            flags: "i",
          },
        },
      ]);

    productContentType.changeFieldControl("url", "builtin", "urlEditor",{
      
    });
    productContentType.changeFieldControl("icon", "builtin", "dropdown");
  },
};

export default migration;
