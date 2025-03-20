import { ContentFulMigration } from "./migrate";
import Migration from "contentful-migration";

const migration: ContentFulMigration = {
  name: "03-add-links",
  migrateFunction(migration: Migration) {
    const linkContentType = migration.createContentType("link").name("Link");

    linkContentType
      .createField("icon")
      .name("Icon")
      .type("Text")
      .validations([
        {
          in: [
            "x",
            "facebook",
            "instagram",
            "linkedin",
            "mastodon",
            "bluesky",
            "youtube",
            "linkedin",
            "none"
          ],
        },
      ])
      .required(true);

    linkContentType
      .createField("text")
      .name("Text")
      .type("Symbol")
      .required(true);

    linkContentType
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

  linkContentType
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

    linkContentType.changeFieldControl("url", "builtin", "urlEditor", {});
    linkContentType.changeFieldControl("icon", "builtin", "dropdown");
    linkContentType.displayField("text");
  },
};

export default migration;
