import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "01-add-products",
  migrateFunction(migration: Migration) {
    const productContentType = migration
      .createContentType("product")
      .name("Product");

    productContentType
      .createField("slug")
      .name("Slug")
      .type("Symbol")
      .required(true)
      .validations([
        {
          unique: true,
        },
        {
          regexp: {
            pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$", // Enforce URL-friendly format
            flags: "i",
          },
        },
      ]);

    productContentType
      .createField("title")
      .name("Title")
      .type("Symbol")
      .required(true)
      .validations([
        {
          unique: true,
        },
      ]);

    productContentType
      .createField("description")
      .name("Description")
      .type("RichText")
      .required(true);

    productContentType
      .createField("images")
      .name("Images")
      .type("Link")
      .linkType("Asset");

    productContentType
      .createField("price")
      .name("Price")
      .type("Number")
      .required(true);

    productContentType
      .createField("rating")
      .name("rating")
      .type("Number")
      .defaultValue({
        "en-US": 0,
      })
      .required(true);

    productContentType
      .createField("categories")
      .name("Categories")
      .type("Link")
      .linkType("Entry")
      .validations([
        {
          linkContentType: ["category"],
        },
      ]);

    productContentType.changeFieldControl("slug", "builtin", "slugEditor", {
      trackingFieldId: "title",
    });
    productContentType.changeFieldControl("rating", "builtin", "rating");
  },
};

export default migration;
