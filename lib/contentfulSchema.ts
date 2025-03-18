type ContentTypeField = {
  id: string;
  name: string;
  type:
    | "Symbol"
    | "Text"
    | "RichText"
    | "Number"
    | "Boolean"
    | "Date"
    | "Link"
    | "Array";
  linkType?: "Entry" | "Asset"; // Required for references
  items?: { type: "Link"; linkType: "Entry" | "Asset" }; // Required for arrays
  required?: boolean;
  localized?: boolean;
};


type ContentTypeSchema = {
  id: string;
  name: string;
  fields: ContentTypeField[];
};

// Define models with categories
export const schemas: ContentTypeSchema[] = [
  {
    id: "blogPost",
    name: "Blog Post",
    fields: [
      { id: "title", name: "Title", type: "Symbol", required: true },
      { id: "body", name: "Body", type: "RichText" },
      {
        id: "authors",
        name: "Authors",
        type: "Array",
        items: { type: "Link", linkType: "Entry" },
        required: true,
      }, // Multiple authors
      {
        id: "categories",
        name: "Categories",
        type: "Array",
        items: { type: "Link", linkType: "Entry" },
        required: false,
      }, // Multiple categories
    ],
  },
  {
    id: "author",
    name: "Author",
    fields: [
      { id: "name", name: "Name", type: "Symbol", required: true },
      { id: "bio", name: "Bio", type: "Text" },
      {
        id: "profileImage",
        name: "Profile Image",
        type: "Link",
        linkType: "Asset",
        required: false,
      }, // New reference to an image
    ],
  },
  {
    id: "category",
    name: "Category",
    fields: [
      { id: "name", name: "Name", type: "Symbol", required: true },
      { id: "slug", name: "Slug", type: "Symbol", required: true },
    ],
  },
];
