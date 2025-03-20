import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "add-page-content-type",
  migrateFunction(migration: Migration) {
    const baseContentType = migration.createContentType("page").name("Page");

    baseContentType
      .createField("slug")
      .name("Slug")
      .type("Symbol")
      .required(true);

    baseContentType
      .createField("title")
      .name("Title")
      .type("Symbol")
      .required(true)
      .validations([
        {
          size: { max: 255 },
        },
      ]);


    baseContentType
      .createField("blocks")
      .name("Blocks")
      .type("Array")
      .items({
        type: "Link",
        linkType: "Entry",
      });

    baseContentType.changeFieldControl("slug", "builtin", "slugEditor", {
      trackingFieldId: "title",
    });

    baseContentType.displayField('title')
  },
};

export default migration;
