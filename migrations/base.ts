import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "{{name}}",
  migrateFunction(migration: Migration) {
    const baseContentType = migration
      .createContentType("product")
      .name("Product");

      baseContentType.createField('name').name('name')
  },
};

export default migration;
