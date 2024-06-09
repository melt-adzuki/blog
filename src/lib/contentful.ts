import contentful, { type EntryFieldTypes } from "contentful";

export interface BlogPost {
  contentTypeId: "blogPost";
  fields: {
    slug: EntryFieldTypes.Text;
    newsType: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
    thumbnail: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
}).withoutUnresolvableLinks;
