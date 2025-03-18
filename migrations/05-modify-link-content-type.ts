import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "modify-link",
  migrateFunction(migration: Migration) {
    const linkContentType = migration.editContentType("link");

    linkContentType
      .createField("links")
      .name("Links")
      .type("Link")
      .linkType("Entry")
      .validations([
        {
          linkContentType: ["link"],
        },
      ]);
  },
};

export default migration;
