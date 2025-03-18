import { ContentFulMigration } from "./migrate";
import Migration from 'contentful-migration'

const migration: ContentFulMigration = {
  name: "01-add-category",
  migrateFunction(migration: Migration) {
    const categoryContentType = migration
      .createContentType("category")
      .name("Category");
    categoryContentType
      .createField("name")
      .name("Name")
      .type("Symbol")
      .required(true);
    categoryContentType
      .createField("description")
      .name("Description")
      .type("RichText")
      .required(true);
    categoryContentType
      .createField("images")
      .name("Images")
      .type("Link")
      .linkType("Asset");
  },
};

export default migration