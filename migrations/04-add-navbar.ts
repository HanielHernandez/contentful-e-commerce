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
      .name("Title")
      .required(true)
      .type('Symbol')
      .validations([{ unique: true }]);

    navbarContentType
      .createField("logo")
      .name("Logo")
      .type("Link")
      .linkType("Asset");

    navbarContentType
      .createField("links")
      .name("Links")
      .type("Array")
      .items({
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["link"],
          },
        ],
      });

          navbarContentType.displayField("title");

  },
};

export default migration;
