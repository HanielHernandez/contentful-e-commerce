import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "add-navbar",
  migrateFunction(migration: Migration) {
    const navbarContentType = migration
      .createContentType("navbar")
      .name("Navbar");
      
    navbarContentType
      .createField("title")
      .name("title")
      .required(true)
      .validations([{ unique: true }]);

    navbarContentType
      .createField("logo")
      .name("Logo")
      .type("Link")
      .validations([
        {
          size: { max: 1 },
        },
      ])
      .linkType("Asset");

    navbarContentType
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
