export function getOgpUrl({
  thumbnail,
  title,
  highlight,
}: {
  thumbnail?: string;
  title: string;
  highlight?: string;
}) {
  const ogpServerUrl = import.meta.env.OGP_SERVER_URL;

  const encodedThumbnail = thumbnail && encodeURIComponent("https://" + thumbnail);
  const encodedTitle = encodeURIComponent(title);
  const encodedHighlight = highlight && encodeURIComponent(highlight);

  return `${ogpServerUrl}/?${
    thumbnail ? `img=${encodedThumbnail}&` : ``
  }ttl=${encodedTitle}${highlight ? `&hl=${encodedHighlight}` : ``}`;
}
